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

let taskList = [];

getSaveButton.addEventListener("click", () => {
  if (getTaskNameInput.value !== "") {
    taskList.push({ id: uuidv4(), name: getTaskNameInput.value })
    localStorage.setItem('TaskList', JSON.stringify(taskList))
    displayTask()
  }
});


function deleteTask(taskItem) {
  const getTaskList = JSON.parse(localStorage.getItem('TaskList'));
  const filterTask = getTaskList.filter((item) => {
    return item.id !== taskItem.id
  })
  localStorage.setItem('TaskList', JSON.stringify(filterTask))
  displayTask()
}



function displayTask() {
  taskList = JSON.parse(localStorage.getItem('TaskList') ?? []);

  const getTaskDiv = document.getElementById("addTask");
  getTaskDiv.innerHTML = "";

  taskList.forEach(function (taskItem) {
    const globalDiv = document.createElement("div")
    const firstDivChild = document.createElement("div");
    const createParagraph = document.createElement("p");
    const secondDivParent = document.createElement("div");
    const firstButton = document.createElement("BUTTON");
    const secondButton = document.createElement("BUTTON");

    secondButton.addEventListener("click", () => {
      deleteTask(taskItem)
    })



    getTaskDiv.appendChild(globalDiv);
    globalDiv.appendChild(firstDivChild)
    globalDiv.appendChild(secondDivParent)
    firstDivChild.appendChild(createParagraph);
    createParagraph.innerText = taskItem.name


    secondDivParent.appendChild(firstButton);
    firstButton.classList.add("fa-check")
    firstButton.classList.add("fa-solid")
    firstButton.classList.add(randomClassNameTask())
    secondDivParent.appendChild(secondButton);
    secondButton.classList.add("fa-xmark")
    secondButton.classList.add("fa-solid")
    secondButton.classList.add(randomClassNameTask())

    globalDiv.style.display = "flex"
    globalDiv.style.justifyContent = "space-between"

    createParagraph.style.margin = "10px 0"
    createParagraph.style.fontWeight = "400"


    secondDivParent.style.display = "flex";
    secondDivParent.style.alignItems = "center";
    secondDivParent.style.gap = "8px";
    firstButton.style.background = 'none';
    secondButton.style.background = 'none';
  });

  document.getElementById("task_notifications_counter").innerHTML = taskList.length

}



displayTask()


