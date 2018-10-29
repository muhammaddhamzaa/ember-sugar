import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    var model = this.store.findAll('lead');
    return model;
  },
  setupController: function(controller, model){
    controller.set('model',model);
  },
});
