import Route from '@ember/routing/route';

export default Route.extend({
  model: function(){
    var self=this;
    var model = this.store.findAll('lead').catch(function(err){
      window.alert("Session expired, please login!");
      self.transitionTo("login-page");
    });
    return model;
  },

  setupController: function(controller, model){
    controller.set('model',model);
  },

  actions:
  {
  insertlead: function(){
    this.transitionTo("insertlead");
  },

  deletelead: function(){
    this.transitionTo("deletelead");
  }
  }
});
