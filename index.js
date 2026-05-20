// Local Storage for the users process on the project
const locStore = JSON.parse(localStorage.getItem("Storage"));

function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task");
        return;
      }

      const li = document.createElement("li");

      li.innerHTML = `
        <span class="task-text">${taskText}</span>

        <div class="actions">
          <button class="edit-btn" onclick="editTask(this)">Edit</button>
          <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
      `;

      document.getElementById("taskList").appendChild(li);

      taskInput.value = "";
    }

    function editTask(button) {
      const li = button.parentElement.parentElement;
      const taskSpan = li.querySelector(".task-text");

      const newTask = alert("Edit task:", taskSpan.textContent);

      if (newTask !== null && newTask.trim() !== "") {
        taskSpan.textContent = newTask;
      }
    }

    function deleteTask(button) {
      const li = button.parentElement.parentElement;
      li.remove();
    }



