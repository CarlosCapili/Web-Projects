var addButton = document.getElementById("add");
var clearButton = document.getElementById("clear");
var emptyButton = document.getElementById("empty");
var saveButton = document.getElementById("save");

addButton.addEventListener("click", addToDoItem);
clearButton.addEventListener("click", clrToDoItem);
emptyButton.addEventListener("click", empToDoItem);
saveButton.addEventListener("click", saveToDoItem);

var entryBox = document.getElementById("todo-entry");
var toDoList = document.getElementById("todo-list");

function addToDoItem(){
	var itemText = entryBox.value;
	newItem(itemText, false)
}

function clrToDoItem(){
	clrCompletedToDoItems();
}

function empToDoItem(){
	emptyList();
}

function saveToDoItem(){
	saveList();
}

function newItem(itemText, completed){
	var toDoItem = document.createElement("li");
	var toDoText = document.createTextNode(itemText);
	toDoItem.appendChild(toDoText);

	if (completed) {
		toDoItem.classList.add("completed");
	}

	toDoList.appendChild(toDoItem);
	toDoItem.addEventListener('dblclick', toggleToDoItemState);
}

function toggleToDoItemState(){
	if (this.classList.contains("completed")) {
		this.classList.remove("completed");
	} else {
		this.classList.add("completed");
	}
}

function clrCompletedToDoItems() {
	var completedItems = toDoList.getElementsByClassName("completed");

	while(completedItems.length > 0) {
		completedItems.item(0).remove();
	}
}

function emptyList() {
	var items = toDoList.children;

	while (items.length > 0) {
		items.item(0).remove();
	}
}

function saveList() {
	var toDos = [];

	for (let i = 0; i < toDoList.children.length; i++){
		var toDo = toDoList.children.item(i);

		var toDoInfo = {
			"task" : toDo.innerText,
			"completed": toDo.classList.contains("completed")
		};

		toDos.push(toDoInfo);
	}

	localStorage.setItem("toDos", JSON.stringify(toDos));
}

function loadList() {
	if (localStorage.getItem("toDos") != null) {
		var toDos = JSON.parse(localStorage.getItem("toDos"));

		for (let i = 0; i < toDos.length; i++) {
			var toDo = toDos[i];
			newItem(toDo.task, toDo.completed);
		}
	}
}

loadList();