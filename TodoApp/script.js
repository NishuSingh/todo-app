const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("container-list");

// Function to be executed when the "Add" button is clicked
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!"); 
    }
    else{
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.textContent = inputBox.value;
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveTasks();
}
listContainer.addEventListener("click", deleteTask);

function deleteTask(event) {
    if (event.target.tagName === "SPAN") {
        event.stopPropagation();
        event.target.parentElement.remove();
        saveTasks();
    }
    else if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveTasks();
    }
}
    function saveTasks() {
        localStorage.setItem("tasks", listContainer.innerHTML);
    }
    function loadTasks() {
        listContainer.innerHTML = localStorage.getItem("tasks");
    }
loadTasks();

