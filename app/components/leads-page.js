import Component from '@ember/component';

export default Component.extend({
    init: function(){
      var i;
      var filtered_data =[];
      var records = JSON.parse(sessionStorage.getItem('data'));
      for (i=0;i<records.length-1;i++){
        filtered_data [i]["name"] = records[i]["name"];
        filtered_data [i]["status"] = records[i]["status"];
        filtered_data [i]["account_name"] = records[i]["account_name"];
        filtered_data [i]["phone_work"] = records[i]["phone_work"];
        filtered_data [i]["email"] = records[i]["email"][0]["email_address"];
        filtered_data [i]["user"] = records[i]["assigned_user_name"];
        filtered_data [i]["date_entered"] = records[i]["date_entered"];
        filtered_data [i]["date_modified"] = records[i]["date_modified"];
      }
      this.set(("data", filtered_data));
    }
});
