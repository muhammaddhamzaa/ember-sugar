import DS from 'ember-data';

export default DS.Model.extend({
  records: DS.hasMany('record')
});
