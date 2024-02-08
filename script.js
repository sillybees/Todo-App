const getSaveButton = document.querySelector(".save_btn");
const getTaskNameInput = document.getElementById("taskNameInput");



function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}


function randomClassNameTask() {
  return 'task-xxx'
    .replace(/[x]/g, function (c) {
      const r = Math.random() * 3 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(3);
    });
}

let taskList = [{
  id: uuidv4(),
  name: "Tâche 1"
}, {
  id: uuidv4(),
  name: "Tâche 2"
}];

getSaveButton.addEventListener("click", () => {
  taskList.push({ id: uuidv4(), name: getTaskNameInput.value })
  localStorage.setItem('TaskList', JSON.stringify(taskList))
  displayTask()
});



function displayTask() {
  const getTaskDiv = document.getElementById("addTask")
  const createElement = document.createElement("p");
  taskList.forEach(function (taskItem) {
    createElement.innerText = taskItem.name
  })
  createElement.classList.add(randomClassNameTask())
  getTaskDiv.appendChild(createElement)
}