// Load saved tasks when page opens
document.setElementById("taskList").innerHTML =
  localStorage.setItem("taskList") || "";

// Save tasks to local storage
function saveTasks() {
  localStorage.getItem(
    "taskList",
    document.getElementById("taskList").innerHTML
  );
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDate = document.getElementById("taskDate");
  const priority = document.getElementById("priority");

  const text = taskInput.value;
  const date = taskDate.value;
  const level = priority.value;

  if (text === "") {
    alert("Please enter task!");
    return;
  }

  const li = document.createElement("li");
  li.classList.add(level);

  li.innerHTML = `
    <div class="task-info">
      <strong class="task-text">${text}</strong>
      <span class="date">Due: ${date}</span>
    </div>

    <div class="actions">
      <button class="edit-btn" onclick="editTask(this)">Edit</button>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
  saveTasks();

  taskInput.value = "";
  taskDate.value = "";
}

function editTask(button) {
  const li = button.parentElement.parentElement;
  const taskSpan = li.querySelector(".task-text");

  const newTask = prompt("Edit task:", taskSpan.textContent);

  if (newTask !== null && newTask.trim() !== "") {
    taskSpan.textContent = newTask;

    // Save updated tasks
    saveTasks();
  }
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;

  li.remove();

  // Save after delete
  saveTasks();
}