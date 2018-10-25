import Component from '@ember/component';

export default Component.extend({
    init: function(){
      var i =0;
      var filtered_data =[];
      var records = sessionStorage.getItem('data');
      records.foreach( element=>{
        filtered_data [i]["name"] = element["name"];
        filtered_data [i]["status"] = element["status"];
        filtered_data [i]["account_name"] = element["account_name"];
        filtered_data [i]["phone_work"] = element["phone_work"];
        filtered_data [i]["email"] = element["email"][0]["email_address"];
        filtered_data [i]["user"] = element["assigned_user_name"];
        filtered_data [i]["date_entered"] = element["date_entered"];
        filtered_data [i]["date_modified"] = element["date_modified"];

        i=i+1;
      });
      this.set(("data", filtered_data));
    }
});
