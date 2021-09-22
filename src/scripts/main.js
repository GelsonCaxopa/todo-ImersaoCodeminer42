var todoList = [];

function createTodo(){
    var timestamp = new Date();

    var id = 
        timestamp.getDate().toString() +
        timestamp.getMilliseconds().toString(); 


    var todoListDescription = document.getElementById("description").value;
    var todoListDeadlineDate = document.getElementById("deadlineDate").value;
    var date = new Date();

    var todoCreateDate = date.getDate().toString() + '/' + (date.getMonth()+1).toString() + '/' + date.getFullYear().toString();


    var tags = document.getElementById("tags").value;


    var todo = {
        
        data: {
            id: id,
            description: todoListDescription,
            
            createDate: todoCreateDate,

            deadlineDate: todoListDeadlineDate,
            tags:tags,
            
        }
    };

    var lTodos = JSON.parse(localStorage.getItem("todos"));
         
    //

    if(lTodos == null){
        localStorage.setItem('todos', "[]");
        lTodos = [];
    }

    todoList.push(todo);
    localStorage.setItem('todos', JSON.stringify(todoList));
    
    
    
    todoListDescription.value='';
    todoCreateDate='';
    todoListDeadlineDate.value='';
    tags.value ='';    
    
       /*  let todos = {id: todo.id, description: todo.data.description, createDate: todo.data.createDate,
            deadlineDate: todo.data.deadlineDate, tag: todo.data.tags} */
       
}
