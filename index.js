// Local Storage for the users process on the project
const locStore = JSON.parse(localStorage.getItem("Storage"));

function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.createElement("li");
    taskList.textContent = input.value;
    document.getElementById("taskList").appendChild(taskList);
    input.value = "";
}

function removeTask() {
    const removeTasks = document.createElement("button");
    document.getElementById("removeTasks").appendChild(removeTasks);
}

