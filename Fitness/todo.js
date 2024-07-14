const taskValue=document.getElementById("task-name"),
      taskDate=document.getElementById("dueDate");
      priorityValue=document.getElementById("priority");
const todoForm=document.getElementById("todo-form");
const todoList=document.getElementById("myList");
const todoToday=document.getElementById("myToday");
const todoUpcoming=document.getElementById("myUpcoming");
  

var taskList = document.getElementById("task-name");
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }



todoForm.addEventListener( 'submit', function ( event ) {
  event.preventDefault();
  const newTask=taskValue.value;

  if (newTask===''){
    alert("please enter a task");
    return;
  }else{
  taskValue.value='';
  addTask(newTask);
  if(taskDate.value> new Date().toISOString().slice(0, 10)){
    addUpcoming(newTask);
  }else{
    addToday(newTask);
  }
  }
});

function addTask(task){
  const listItem=document.createElement('li');
  const taskText=document.createElement('span');
  taskText.textContent=task;
  listItem.appendChild(taskText);

  const checkBox=document.createElement('input');
  checkBox.setAttribute('type','checkbox');
  listItem.appendChild(checkBox);

  const deleteButton=document.createElement('button');
  deleteButton.textContent= "Delete";
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

  

  checkBox.addEventListener('change', function() {
    if (this.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
});

deleteButton.addEventListener('click', function() {
  todoList.removeChild(listItem);
  });
saveTasksToLocalStorage();
}
/////////////////////////////////////////////////////////////////////////////////
function addToday(task){
  const listItem=document.createElement('li');
  const taskText=document.createElement('span');
  taskText.textContent=task;
  listItem.appendChild(taskText);

  const checkBox=document.createElement('input');
  checkBox.setAttribute('type','checkbox');
  listItem.appendChild(checkBox);

  const deleteButton=document.createElement('button');
  deleteButton.textContent= "Delete";
  listItem.appendChild(deleteButton);

  todoToday.appendChild(listItem);

  

  checkBox.addEventListener('change', function() {
    if (this.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
});

deleteButton.addEventListener('click', function() {
  todoToday.removeChild(listItem);
  });
saveTasksToLocalStorage();
}
///////////////////////////////////////////////////////////////////////////////
function addUpcoming(task){
  const listItem=document.createElement('li');
  const taskText=document.createElement('span');
  taskText.textContent=task;
  listItem.appendChild(taskText);

  const checkBox=document.createElement('input');
  checkBox.setAttribute('type','checkbox');
  listItem.appendChild(checkBox);

  const deleteButton=document.createElement('button');
  deleteButton.textContent= "Delete";
  deleteButton
  listItem.appendChild(deleteButton);

  todoUpcoming.appendChild(listItem);

  

  checkBox.addEventListener('change', function() {
    if (this.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
});

deleteButton.addEventListener('click', function() {
  todoUpcoming.removeChild(listItem);
  });
saveTasksToLocalStorage();
}
/////////////////////////////////////////////////////////////////////////////////
function saveTasksToLocalStorage() {
const tasks = [];
document.querySelectorAll('#todo-list li').forEach(task => {
    const taskText = task.querySelector('span').textContent;
    const isCompleted = task.classList.contains('completed');
    tasks.push({ text: taskText, completed: isCompleted });
});
localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', function() {
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
savedTasks.forEach(task => {
    addTask(task.text);
});
});

