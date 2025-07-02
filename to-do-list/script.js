function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Click to mark as done
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "✕";
  delBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent mark as complete
    taskList.removeChild(li);
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}
