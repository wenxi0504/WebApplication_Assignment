//IFEE
"use strict";
(function(){

    function confirmDelete()
    {
      // confirm deletion
      $("a.delete").on("click", function(event){
        if(!confirm("Arr you sure to delete the data?"))
        {
          event.preventDefault();
          location.href = '/contacts_list';
        }       
      });
    }

    function Start():void
    {
        console.log("App Started");
        
        confirmDelete();  
    }

    window.addEventListener("load", Start);

})();

