import Route from '@ember/routing/route';
import {inject} from '@ember/service';

export default Route.extend({
  beforeModel() {
    if(!this.get('session.isAuthenticated'))
    {
      this.transitionTo('login-page');
    } else {
      this.transitionTo('leads');
    }
  },
});
