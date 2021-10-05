const todoItemsList = document.querySelector('.todo-list');

function renderTodos(todos) {
    todoItemsList.innerHTML = '';
  
    todos.forEach(function(item) {
      const checked = item.completed ? 'checked': null;
  
      const div = document.createElement('div');
      div.setAttribute('id', 'todoCard')
      div.setAttribute('class', 'item');
      div.setAttribute('data-key', item.id);

      if (item.completed === true) {
        div.classList.add('checked');
        item.status = 'Completo';
      }else{
          item.status = 'Incompleto';
      }
  
      div.innerHTML = `
      
      <label><i class="fas fa-align-justify"></i>&nbsp&nbsp${item.description}</label><br>
      <i class="fas fa-calendar-plus"></i>&nbsp&nbsp${item.createDate}<br>
      <i class="fas fa-calendar-times"></i>&nbsp&nbsp${item.deadline}<br>
      <i class="fas fa-tag"></i>&nbsp&nbsp${item.tags}<br>
      <i class="fas fa-info"></i>&nbsp&nbsp${item.status}<br>
      <button class="edit" onclick="editTask()"><i class="fas fa-edit"></i></button>
      <button class='delete-button' type="submit"><i class='fas fa-trash'></i> </button>
      <button class='check' ${checked} type="submit" onclick="toggle()"><i class='fas fa-check'></i></button>
      
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
  
todoItemsList.addEventListener('click', function(event) {
    if (event.target.classList.contains('check')) {
      toggle(event.target.parentElement.getAttribute('data-key'));
    }
  
    if (event.target.classList.contains('delete-button')) {
      deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
});   

