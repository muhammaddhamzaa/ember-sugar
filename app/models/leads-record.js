import DS from 'ember-data';

export default DS.Model.extend({
  name: attr('string'),
  status: attr('string'),
  account_name: attr('string'),
  phone_work: attr('string'),
  assigned_user_name: attr('string'),
  date_entered: attr('string'),
  date_modified: attr('string')
});
