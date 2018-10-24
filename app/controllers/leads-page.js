import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  ajax: Ember.inject.service(),
  init:function(){
      const token = sessionStorage.getItem('token')
      this.get('ajax').request('http://127.0.0.1/SugarPro-Full-8.0.0/rest/v10/Leads',{
        method: 'POST',
        headers:{
        'Content-Type': 'application/json',
        'oauth-token': `${token}`
        },
        success: function(response){
          console.log(response);
          sessionStorage.setItem("data", response);
        },
        error: function(){
          window.alert("Please Login!");
          window.location.assign("/login-page");

        },
        dataType: 'json'
      });
    }
  });
