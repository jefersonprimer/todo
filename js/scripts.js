 // funcao que adiciona tarefa
function  addTask() {

  // titulo da tarefa
  const taskTitle = document.querySelector("#task-title").value;

  if(taskTitle) {

    // clona template
    const template = document.querySelector(".template");

    const newTask = template.cloneNode(true);

    // adiciona titulo 
    newTask.querySelector(".task-title").textContent = taskTitle;

    // remover as classes desnecessarias
    newTask.classList.remove("template", "hide");

    // adiciona tarefa na lista
    const list = document.querySelector("#task-list");

    list.appendChild(newTask);

    // adicionar o evento de remover tarefa
    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
      removeTask(this);
    });

    // adicionar o evento de marcar tarefa como feita
    const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
      completeTask(this);
    })

    // limpa input
    document.querySelector("#task-title").value = "";
  }  
}

// funcao de remover tarefas 
function removeTask(task) {
  task.parentNode.remove(true);
}

// funcao de marcar tarefas como feitas
  function completeTask(task) {
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done");
  }

 // evento de adicionar a tarefa
 const addBtn = document.querySelector("#add-btn");

 addBtn.addEventListener("click", function(e) {

  e.preventDefault();
  
  addTask();

 });