const todoItemsList = document.querySelector('.todo-list');
const descriptione = document.querySelector('.descriptione');
const deadline = document.querySelector('.deadlinee');
const tag = document.querySelector('.tagse');
const modal = document.querySelector('.modal-container');
const check = document.querySelector('.todo-list-check');
const filterTodo = document.querySelector('.filter_todo');


var filter = false;

/*   Fazer uma função para ver se a class principal esta com filtro ou nao e assim rodar a função render ou filter */




function renderTodos(todos) {
    todoItemsList.innerHTML = '';
  
    todos.forEach(function(item) {
      const checked = item.completed ? 'checked': null;
  
      const div = document.createElement('div');
      div.setAttribute('id', 'todoCard')
      div.setAttribute('class', 'item container');
      div.setAttribute('data-key', item.id);

      if (item.completed === true) {
        div.classList.add('checked');
        item.status = 'Completo';
        check.append(div);  

      }else{
        item.status = 'Incompleto';
        todoItemsList.append(div);
      }

      
     
  
      div.innerHTML = `
      
      <div class="todoItem"> <i class="fas fa-align-justify"></i><br>${item.description}</div>
      <div class="todoItem"> <i class="fas fa-calendar-plus"></i><br>${item.createDate}</div>
      <div class="todoItem"><i class="fas fa-calendar-times"></i><br>${item.deadline}</div>
      <div class="todoItem"><i class="fas fa-tag"></i><br>${item.tags}</div>
      <div class="todoItem"><i class="fas fa-info"></i><br>${item.status}</div><br>
      
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete-button" type="submit"><i class='fas fa-trash'></i> </button>
      <button class='check' ${checked} type="submit" ><i class='fas fa-check'></i></button>
      
      `;
      
      
    });
  
}


function getFromLocalStorage() {
    const reference = localStorage.getItem('todos');
    if (reference) {
      todos = JSON.parse(reference);
      renderTodos(todos);
    }
}

 
function toggle(id) {
    todos.forEach(function(item) {
      if (item.id == id) {
        item.completed = !item.completed;
        
      }
      localStorage.setItem('todos', JSON.stringify(todos));
      renderTodos(todos);
    });
  
    
}
  
function deleteTodo(id) {
    todos = todos.filter(function(item) {
      return item.id != id;
    });
    
    localStorage.setItem('todos', JSON.stringify(todos));
    alert('Todo excluida com sucesso!');
    renderTodos(todos);
}
  
getFromLocalStorage();



function edit(id) {
  
  todos.forEach(function(item) {
    if (item.id == id) {
      modal.classList.add("mostrar")     
          
    }  
}
);
  
}



function fecharModal(){
  
}


function salvar(){
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
  fecharModal();
}

  
todoItemsList.addEventListener('click', function(event) {
    if (event.target.classList.contains('check')) {
      toggle(event.target.parentElement.getAttribute('data-key'));
    }
  
    if (event.target.classList.contains('delete-button')) {
      deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
    if (event.target.classList.contains('edit')) {
      edit(event.target.parentElement.getAttribute('data-key'));
    }
  
    if (event.target.classList.contains('filter-button')) {
      filterTodo(event.target.parentElement.getAttribute('data-key'));
    }  
});

check.addEventListener('click', function(event) {
  if (event.target.classList.contains('check')) {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
  if (event.target.classList.contains('edit')) {
    edit(event.target.parentElement.getAttribute('data-key'));
  }

  if (event.target.classList.contains('filter-button')) {
    filterTodo(event.target.parentElement.getAttribute('data-key'));
  }  
});   




