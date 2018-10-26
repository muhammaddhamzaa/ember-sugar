import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs:{
    "leads-record": { embedded: 'always'}
  },
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
    payload = {"leads-main": payload};
    console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
