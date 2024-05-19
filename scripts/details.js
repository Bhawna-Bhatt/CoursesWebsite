"use strict"

window.onload = function() {
    const urlParams = new URLSearchParams(location.search);
    let cid = -1;
    if (urlParams.has("cid") === true)
        {
            cid = urlParams.get("cid")
            // call a method that fetches this course
            getCourse(cid);
            }

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

      
      const startDate = document.createElement('p');
      startDate.textContent = ` Course Name: ${data.startDate}`;
      container.appendChild(startDate);

    })
    .catch(error => {
      // handle errors that occurred during the fetch request
      console.log(error)
    });
}



