window.onload = function() {
    const urlParams = new URLSearchParams(location.search);
    let cid = -1;
    if (urlParams.has("cid") === true)
        {
            cid = urlParams.get("cid")
            // call a method that fetches this course
            getCourse(cid);
            }

    let courseDeleteBtn = document.getElementById("deleteCourse");
    courseDeleteBtn.onclick= deleteCoursefn(cid);
        

    

}

function getCourse(cid) {
    fetch('http://localhost:8081/api/courses/' + cid)
   .then(response => response.json())
   .then(data => {
      // this returns a single course!
      const container = 
         document.getElementById('courseContainerDiv');

      // display one course property in a <p>
      const deptP = document.createElement('p');
      deptP.textContent = `Dept: ${data.dept}`;
      container.appendChild(deptP);

      const courseName = document.createElement('p');
      courseName.textContent = ` Course Name: ${data.courseName}`;
      container.appendChild(courseName);


      const instructor = document.createElement('p');
      instructor.textContent = ` Instructor Name: ${data.instructor}`;
      container.appendChild(instructor);
   })
}


   function deleteCoursefn(cid) 
   {


        // send DELETE request w/ id as part of URL
    fetch("http://localhost:8081/api/courses/" + cid, 
        {
        method: "DELETE",
        headers: {
         'Content-type' : 'application/json'
        },
        })
        .then(response => {
         if(response.status == 204) {
            console.log("204");
         }
        })
        .then(data => {
                    // If the DELETE is successful, display a message
                    console.log(dat);
                    //let confirmationMessage = document.getElementById(confirmationMessage);
                    //confirmationMessage.innerText = "Course deleted";
                    }
            );
    }   
 /* .catch(err => {
     // If the DELETE returns an error, display a message
     let confirmationMessage = 
        document.getElementById(confirmationMessage);
     confirmationMessage.innerHTML = "Unexpected error.";
});*/




