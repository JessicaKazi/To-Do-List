// Local Storage for the users process on the project
const locStore = JSON.parse(localStorage.getItem("Storage"));

 function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskDate = document.getElementById("taskDate");
      const priority = document.getElementById("priority");

      const text = taskInput.value.trim();
      const date = taskDate.value;
      const level = priority.value;

      if (text === "" || date === "") {
        alert("Please enter task and date");
        return;
      }

      const li = document.createElement("li");
      li.classList.add(level);

      li.innerHTML = `
        <div class="task-info">
          <strong>${text}</strong>
          <span class="date">Due: ${date}</span>
        </div>

        <div class="actions">
          <button class="edit-btn" onclick="editTask(this)">Edit</button>
          <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
      `;

      document.getElementById("taskList").appendChild(li);

      taskInput.value = "";
      taskDate.value = "";
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



