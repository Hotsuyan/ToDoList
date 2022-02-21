const form = document.querySelector("form");
const input = document.querySelector("[name='todo']")
const toDoList = document.getElementById('todos');

const toDoData = [];

function addToDo (text) {
    toDoData.push(text);
    const li = document.createElement("li");
    li.innerHTML = text;
    toDoList.appendChild(li);

}
form.onsubmit = (e)=> {
    
    addToDo(input.value);
    e.preventDefault();
}