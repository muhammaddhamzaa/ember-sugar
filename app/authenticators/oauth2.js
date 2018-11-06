import OAuth2PasswordGrant from "ember-simple-auth/authenticators/oauth2-password-grant";
import ENV from '../config/environment';
import { inject } from '@ember/service';
import { isEmpty } from '@ember/utils';
import RSVP from 'rsvp';
import {run} from '@ember/runloop';

export default OAuth2PasswordGrant.extend({

  session: inject(),

  authenticate(username, password, headers={}){
    var client_id = ENV.api.clientId,
    client_secret = ENV.api.clientSecret,
    grant_type = ENV.api.grant_type;

    if (isEmpty(headers)){
      headers = {
        'Accept':'application/json',
      };
    } else{
    headers.Accept = 'application/json';
  }

  return new RSVP.Promise((resolve, reject) => {
    const data  = {
     username: username,
     password: password,
     client_id : client_id,
     client_secret : client_secret,
     grant_type : grant_type,
   };

   const serverTokenEndpoint = ENV.api.host+'/oauth2/token';
   const useResponse = this.get('rejectWithResponse');

   this.makeRequest(serverTokenEndpoint, data, headers).then((response) => {
      run(() => {
        sessionStorage.setItem('token', response.access_token);
        if (!this._validate(response)) {
          reject('Call failure');
        }
        resolve(response);
      });
    }, (response) => {
      run(null, reject, useResponse ? response : response.responseJSON);

    });

  });

}

});
