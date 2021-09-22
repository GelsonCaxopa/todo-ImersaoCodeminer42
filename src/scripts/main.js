$(function(){
	/* var operacao = "A"; //"A"=Adição; "E"=Edição
	var indice_selecionado = -1; //Índice do item selecionado na lista */
	
// Recupera os dados armazenados e Converte string para objeto
  
});
var lTodos = localStorage.getItem("todos");
lTodos = JSON.parse(lTodos);
if(lTodos == null) // Caso não haja conteúdo, iniciamos um vetor vazio
lTodos = [];
  
var completedButton = document.createElement("button");
completedButton.innerHTML = "<i class='fas fa-check'></i>";
completedButton.classList.add("check-btn");
var trashButton = document.createElement("button");
trashButton.innerHTML = "<i class='fas fa-trash'></i>";
trashButton.classList.add("trash-btn");


var timestamp = new Date();
var date = new Date();


function createTodo(){
 
  var todo = JSON.stringify({

          id: timestamp.getDate().toString() + timestamp.getMilliseconds().toString(),
          description: $("#description").val(),
          createDate: date.getDate().toString() + '/' + (date.getMonth()+1).toString() + '/' + date.getFullYear().toString(),
          deadlineDate: $("#deadlineDate").val(),
          tag: $("#tags").val(),
  });
  console.log(todo);

  lTodos.push(todo);
  localStorage.setItem('todos', JSON.stringify(lTodos));
  alert("Todo cadastrada com sucesso.")
  Listar();
  return true;
        
}

function Listar(){
  $("#todo-list").html("");
  $("#todo-list").html(
    "<thead>"+
        "   <tr>"+
        "   <th>Descrição</th>"+
        "   <th>Data de criação</th>"+
        "   <th>Data de Deadline</th>"+
        "   <th>Tag</th>"+
        "   <th></th>"+  
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
  for(var i in lTodos){
      var todoLi = JSON.parse(lTodos[i]);
      $("#todo-list tbody").append("<tr class='todoLi'>");
      $("#todo-list tbody").append("<td>"+todoLi.description+"</td>");
      $("#todo-list tbody").append("<td>"+todoLi.createDate+"</td>");
      $("#todo-list tbody").append("<td>"+todoLi.deadlineDate+"</td>");
      $("#todo-list tbody").append("<td>"+todoLi.tag+"</td>");
      $("#todo-list tbody").append("<td><button class='check-btn' onclick='check()'><i class='fas fa-check'></i></button></td>");
      $("#todo-list tbody").append("</tr>");
  }
}


function check(todoLi) {
  todoLi.classList.toggle("completed");
}

