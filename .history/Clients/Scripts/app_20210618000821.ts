//IFEE

/*
Full Name:Wen Xu
 Student ID:301098127 
 Course Code:COMP229
 Course Name: Web Application development
 Assignment:Assignment2 for COMP229 
 last modification: 3rd, June
 version:1.0.0
*/
"use strict";
// function confirmdelete to prompt to user to confirm if the user wants to delete the data
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

