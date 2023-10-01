// Get necessary elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task to the list
function addTask() {
  // Get the task text from the input field
  const taskText = taskInput.value;
  if (taskText) {
    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    // Create a checkbox for task completion
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change", toggleTask);

    // Create a span for the task text
    const taskTextElement = document.createElement("span");
    taskTextElement.innerText = taskText;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      deleteTask(deleteBtn);
    });

    // Add elements to the task item and the list
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  }
}

// Toggle task completion
function toggleTask(event) {
  // Get the parent task item and toggle the "completed" class
  const taskItem = event.target.parentNode;
  taskItem.classList.toggle("completed");
}

// Delete task
function deleteTask(deleteBtn) {
  // Get the parent task item and remove it from the list
  const taskItem = deleteBtn.parentNode;
  taskList.removeChild(taskItem);
}
