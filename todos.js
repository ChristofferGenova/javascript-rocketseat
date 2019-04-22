var listElement = document.querySelector("#listaTodos");
var inputElement = document.querySelector("#idInputTodo");
var buttonAddElement = document.querySelector("#idBtnAdd");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

// Renderizando os todos
const renderTodos = () => {
  // Iniciando com vazio
  listElement.innerHTML = "";

  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);
    var linkElement = document.createElement("a");
    var linkText = document.createTextNode("Excluir");

    linkElement.setAttribute("href", "#");
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);

    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", `deleteTodo(${pos})`);
  }
};

const addTodo = () => {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
};

buttonAddElement.onclick = addTodo;

const deleteTodo = pos => {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
};

const saveToStorage = () => {
  localStorage.setItem("list_todos", JSON.stringify(todos));
};
