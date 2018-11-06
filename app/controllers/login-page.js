import Controller from '@ember/controller';
import ENV from "../config/environment";
import {inject} from "@ember/service";
import { isEmpty } from '@ember/utils';

export default Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate(){
      var self= this;
      let {username, password} = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:oauth2', username, password).then(()=>
      self.initializeUser()
      ).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    },

    invalidateSession(){
      this.get('session').invalidate();
      this.transitionToRoute('login-page');
    }
  },

  login_success: function(){
    window.alert("Success!");
    this.transitionToRoute('leads');
  },

  login_failed: function(){
    window.alert("failed!");
    this.transitionToRoute('login-page');
  },

  initializeUser:function(){
    var data = this.session.data.authenticated,
    hash={},
    self=this,
    user;
    hash.portal_name = this.get('username');
    hash.portal_name = this.get('password');
    user = this.store.queryRecord('lead', hash).catch(function(){
      self.login_failed();
      return
    })
    user.then(function(user) {
            if (!isEmpty(user)) {
                data.user = user;
                data.user_id = user.id;
                data.username = self.get('username');
                data.password = btoa(self.get('password'));
                self.get('session').trigger('sessionDataUpdated', data);
                self.get('session').session._setup(self.get('session').session.authenticator, data, true);
                self.login_success();
              }
            })
          }
});
