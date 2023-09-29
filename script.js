// Get necessary elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task to the list
function addTask() {
  const taskText = taskInput.value;
  if (taskText) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change", toggleTask);

    const taskTextElement = document.createElement("span");
    taskTextElement.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      deleteTask(deleteBtn);
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

// Toggle task completion
function toggleTask(event) {
  const taskItem = event.target.parentNode;
  taskItem.classList.toggle("completed");
}

// Delete task
function deleteTask(deleteBtn) {
  const taskItem = deleteBtn.parentNode;
  taskList.removeChild(taskItem);
}