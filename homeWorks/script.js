function addNewTask() {
  let myTaskList = document.getElementById("myTaskList");
  let putTask = document.getElementById("putTask");
  let li = document.createElement("li");
  li.setAttribute("id", putTask.value);
  li.appendChild(document.createTextNode(putTask.value));
  myTaskList.appendChild(li);

  putTask.value = "";
}

//  creating a function to remove item list
  // ! may be there is some error but it is not from code. it is from browser
function removeList() {
  let myTaskList = document.getElementById("myTaskList");
  let putTask = document.getElementById("putTask");
  let removeItem = document.getElementById(putTask.value);
  myTaskList.removeChild(removeItem);
}

// change background

function changeTaskBackgroundColor() {
  let color = document.getElementById("colorPicker").value;
  document.body.style.background = color;
}
