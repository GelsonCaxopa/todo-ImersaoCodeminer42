const todoItemsList = document.querySelector('.todo-list');
const descriptione = document.querySelector('.descriptione');
const deadline = document.querySelector('.deadlinee');
const tag = document.querySelector('.tagse');
const modal = document.querySelector('.modal-container');



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
      }else{
          item.status = 'Incompleto';
      }

     
  
      div.innerHTML = `
      
      <div><label><i class="fas fa-align-justify"></i>&nbsp&nbsp${item.description}</label></div>
      <div><i class="fas fa-calendar-plus"></i>&nbsp&nbsp${item.createDate}</div>
      <div><i class="fas fa-calendar-times"></i>&nbsp&nbsp${item.deadline}</div>
      <div><i class="fas fa-tag"></i>&nbsp&nbsp${item.tags}</div>
      <div><i class="fas fa-info"></i>&nbsp&nbsp${item.status}</div><br>
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class='delete-button' type="submit"><i class='fas fa-trash'></i> </button>
      <button class='check' ${checked} type="submit" ><i class='fas fa-check'></i></button>
      
      `;
      
      todoItemsList.append(div);
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
      item.description = descriptione.value;
    }  
      
  

}
);
  
  
}


function salvar(){
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
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
    
});   



