"use strict"
window.onload = function () {
    let table = document.getElementById("usertable");
    fetch("http://localhost:8081/api/courses")
    .then(response => response.json())
    .then(data => {
        for(let i=0; i<data.length; i++) {
           let row = table.insertRow(-1);
           let cell1 = row.insertCell(0);
           let cell2 = row.insertCell(1);
           let cell3 = row.insertCell(2);
           


           cell1.innerHTML = data[i].dept;
           cell2.innerHTML = data[i].courseNum;
           cell3.innerHTML = data[i].courseName;
           
           
           const detailsCell = row.insertCell(3);
           let anchor = document.createElement("a");
           anchor.href = `details.html?cid=${data[i].id}`;
           anchor.text = "See details";  
           detailsCell.appendChild(anchor);

           const deleteCourse = row.insertCell(4);
           let deleteBtn = document.createElement("button");
           deleteBtn.textContent="Delete this course"
           deleteCourse.appendChild(deleteBtn);
         
           deleteBtn.onclick = function (){
            console.log("clicked delete button")
            window.location=`confirmdelete.html?cid=${data[i].id}`; 
            };

        };

        // deleteBtn.onclick = function (){
        // console.log("clicked delete button")
        // window.location="./confirmdelete.html"; 
        // };
        
        let newCourseBtn = document.getElementById("newCourse");
        newCourseBtn.onclick = addNewCourse;

        
     });

     function addNewCourse() {
      window.location.href="./newcourse.html"; 
     }

     //function deleteCourse() {
     // window.location="./confirmdelete.html"; 
     //}


}