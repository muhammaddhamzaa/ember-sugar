import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    deleteData: function(){
      var self = this;
      var id = this.get('controller').get('id');
      var deletion = this.store.findRecord('deletelead', id )
      .then(function(deletion)
      {
        deletion.destroyRecord()
        .then(function()
        {
          window.alert("record deleted!");
          self.transitionTo("leads");
        });
      })
      .catch((err)=>
      {
        window.alert("Error!");
        this.transitionTo("leads");

      });
    },

    leads: function(){
      this.transitionTo("leads")
    },

    insertlead: function(){
      this.transitionTo("insertlead")
    }
  }
});
