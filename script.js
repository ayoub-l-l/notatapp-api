function createNote() {
  // hent tekst fra input
  let input = document.getElementById("noteInput");
  let text = input.value;

  if (text === "") return; // ikke legg til tomt

  // lag et nytt listeelement
  let li = document.createElement("li");
  li.textContent = text;

  document.getElementById("notesList").appendChild(li);

  input.value = "";
}

function createTodo() {
  let input = document.getElementById("todoInput");
  let text = input.value;

  if (text === "") return;

  let li = document.createElement("li");
  li.textContent = text;

  document.getElementById("todosList").appendChild(li);

  input.value = "";
}