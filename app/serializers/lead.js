import DS from 'ember-data';
import Ember from 'ember';
//import { decamelize } from '@ember/string';


export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    records: { embedded: 'always' }
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    payload = {records:payload}
    console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
