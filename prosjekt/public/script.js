let tempTodoItems = [];

// ---------- Notater ----------
function createNote() {
  let title = document.getElementById("noteTitle").value;
  let text = document.getElementById("noteText").value;
  if (!title || !text) return alert("Fyll ut tittel og notat!");

  fetch("/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, text })
  }).then(() => {
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteText").value = "";
    getNotes();
  });
}

function getNotes() {
  fetch("/notes")
    .then(res => res.json())
    .then(notes => {
      let list = document.getElementById("notesList");
      list.innerHTML = "";
      for (let note of notes) {
        let li = document.createElement("li");
        li.textContent = `${note.title}: ${note.text}`;
        list.appendChild(li);
      }
    });
}

// ---------- Todo ----------
function addTodoItem() {
  let itemText = document.getElementById("todoItem").value;
  if (!itemText) return;
  tempTodoItems.push({ text: itemText, done: false });
  document.getElementById("todoItem").value = "";
  renderTempTodoList();
}

function renderTempTodoList() {
  let list = document.getElementById("todoTempList");
  list.innerHTML = "";
  for (let item of tempTodoItems) {
    let li = document.createElement("li");
    li.textContent = `${item.text} [${item.done ? "✔" : "✖"}]`;
    list.appendChild(li);
  }
}

function createTodo() {
  let title = document.getElementById("todoTitle").value;
  if (!title || tempTodoItems.length === 0) return alert("Fyll ut tittel og minst ett element!");

  fetch("/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, items: tempTodoItems })
  }).then(() => {
    document.getElementById("todoTitle").value = "";
    tempTodoItems = [];
    document.getElementById("todoTempList").innerHTML = "";
    getTodos();
  });
}

function getTodos() {
  fetch("/todos")
    .then(res => res.json())
    .then(todos => {
      let container = document.getElementById("todosList");
      container.innerHTML = "";
      for (let todo of todos) {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.textContent = todo.title;
        div.appendChild(h3);
        let ul = document.createElement("ul");
        for (let item of todo.items) {
          let li = document.createElement("li");
          li.textContent = `${item.text} [${item.done ? "✔" : "✖"}]`;
          ul.appendChild(li);
        }
        div.appendChild(ul);
        container.appendChild(div);
      }
    });
}

// Hent alt ved oppstart
getNotes();
getTodos();