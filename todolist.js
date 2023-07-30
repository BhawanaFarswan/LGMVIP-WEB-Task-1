function addTask() {
    const taskInput = document.getElementById("newTask");
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      return;
    }
  
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" onclick="toggleTaskStatus(this)">
      <span>${taskText}</span>
      <button onclick="deleteTask(this)">Delete</button>
    `;
  
    taskList.appendChild(li);
    taskInput.value = "";
  }
  
  function toggleTaskStatus(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  }
  
  function deleteTask(deleteButton) {
    const li = deleteButton.parentElement;
    li.remove();
  }
  