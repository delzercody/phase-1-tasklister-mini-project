document.addEventListener("DOMContentLoaded", () => {
});

// user clicks submit button

//make a button

//create an event listener

let form = document.getElementById("create-task-form");
createNewTask = form.addEventListener("submit", e => {;
   //console.log(e)
   e.preventDefault();
 task = e.target['new-task-description'].value
 //console.log(task)  

 let liTask = document.createElement("li");
 liTask.textContent = task;
 console.log(liTask)

  
 let createdList = document.getElementById("list");
 createdList.appendChild(liTask);
})

// Create a new element
//set inner text to be task


// get the ul
// append new element to ul