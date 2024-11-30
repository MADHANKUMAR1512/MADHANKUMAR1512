// script.js

// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete">Delete</button>
    `;
    
    // Add event listener to mark task as completed
    li.querySelector('span').addEventListener('click', function() {
      li.classList.toggle('completed');
    });

    // Add event listener to delete task
    li.querySelector('.delete').addEventListener('click', function() {
      taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field
  }
}

// Add task on button click
addTaskButton.addEventListener('click', addTask);

// Optionally, add task on "Enter" key press
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
