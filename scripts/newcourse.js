"use strict"

window.onload = function() 
{
    
    let addBtn = document.getElementById("newCourseAddition");
    
    addBtn.onclick = function () {
    
       
        let bodyData = {
            "id" : "",
            "dept" : document.getElementById("dept").value,
            "courseNum" : Number(document.getElementById("courseNum").value),
            "courseName" : document.getElementById("courseName").value,
            "instructor" : document.getElementById("instructor").value,
            "startDate" : document.getElementById("startDate").value,
            "numDays" : Number(document.getElementById("numDays").value), 
        
            }  /* 

            "id":"",
            "dept":"CompSci",
            "courseNum":601,
            "courseName":"Linus",
            "instructor":"Rob",
            "startDate":"July 18",
            "numDays":10
        }; */
        console.log(bodyData);    


    // Send the request
fetch("http://localhost:8081/api/courses", {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {"Content-type": 
              "application/json"}
  })
  .then(response => response.json()) 
  .then(data => {
//If the POST finishes successfully, display a message
    let confmMessage = document.getElementById("confirmationMessage");
    confmMessage.innerText = "New Course Added" + data.courseName;
  });
  /*.catch(err => {
    // If the POST returns an error, display a message
    let confirmationMessage = 
       document.getElementById(confirmationMessage);
    confirmationMessage.innerText = "Unexpected error" + json;
  });    */
}
}