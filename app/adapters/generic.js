import DS from 'ember-data';
import ENV from '../config/environment'

export default DS.RESTAdapter.extend({

  host: ENV.api.host,
  headers: Ember.computed(function() {
    return {
      'oauth-token': sessionStorage.getItem('token'),
      'Content-Type': 'application/json'
    }
  })
});
