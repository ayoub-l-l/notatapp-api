// Hent lagrede notater og todoer, eller start med tomme lister
let notesJSON = JSON.parse(localStorage.getItem("notes")) || [];
let todosJSON = JSON.parse(localStorage.getItem("todos")) || [];

// Funksjon som viser alt i HTML
function render() {
  let notesList = document.getElementById("notesList");
  let todosList = document.getElementById("todosList");

  // Tøm listene først
  notesList.innerHTML = "";
  todosList.innerHTML = "";

  // Vis notater
  notesJSON.forEach(function(note) {
    let li = document.createElement("li");
    li.textContent = note.text;
    notesList.appendChild(li);
  });

  // Vis todoer
  todosJSON.forEach(function(todo, index) {
    let li = document.createElement("li");

    // Lag avkryssingsboks for "done"
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.onclick = function() {
      todo.done = checkbox.checked;
      localStorage.setItem("todos", JSON.stringify(todosJSON));
      render();
    };

    li.appendChild(checkbox);
    let textNode = document.createTextNode(" " + todo.text);
    li.appendChild(textNode);

    todosList.appendChild(li);
  });
}

// Kjør render ved lasting
render();

// Opprett nytt notat
function createNote() {
  let input = document.getElementById("noteInput");
  let text = input.value.trim();

  if (text === "") return;

  let note = { text: text, timestamp: new Date().toISOString() };
  notesJSON.push(note);

  // Lagre i localStorage
  localStorage.setItem("notes", JSON.stringify(notesJSON));

  input.value = "";
  render();
}

// Opprett ny todo
function createTodo() {
  let input = document.getElementById("todoInput");
  let text = input.value.trim();

  if (text === "") return;

  let todo = { text: text, done: false };
  todosJSON.push(todo);

  localStorage.setItem("todos", JSON.stringify(todosJSON));

  input.value = "";
  render();
}