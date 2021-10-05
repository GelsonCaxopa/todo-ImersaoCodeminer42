// select everything
// select the todo-form
const todoForm = document.querySelector('.todo-form');
// select the input box
const todoInput = document.querySelector('.description');
const deadline = document.querySelector('.deadline');
const tag = document.querySelector('.tags'); 
// select the <ul> with class="todo-items"
var timestamp = new Date();
var date = new Date();


let todos = [];


todoForm.addEventListener('submit', function(event) {
  
  event.preventDefault();
  addTodo();
});

function addTodo(item) {
  if (item !== '') {
    const todo = {
      id: timestamp.getDate().toString() + timestamp.getMilliseconds().toString(),
      description: todoInput.value,
      createDate: date.getDate().toString() + '/' + (date.getMonth()+1).toString() + '/' + date.getFullYear().toString(),
      deadline: deadline.value,
      tags: tag.value,
      status: 'Incompleto',
      completed: false,
      
    };
    
    todos.push(todo);
    addToLocalStorage(todos); 
    todoInput.value = '';
  }
}


function addToLocalStorage(todos) {

  localStorage.setItem('todos', JSON.stringify(todos));
  alert('Todo cadastrada com sucesso.');
  window.location.href='list_todos.html'

}

function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  if (reference) {
    todos = JSON.parse(reference);
  }
}

getFromLocalStorage();

