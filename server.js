const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public")); // frontend

const DB_FILE = "data.json";

// Les data fra fil
function readData() {
  try {
    return JSON.parse(fs.readFileSync(DB_FILE));
  } catch {
    return { notes: [], todos: [] };
  }
}

// Skriv data til fil
function writeData(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// --------------------
// Endepunkter
// --------------------

// Hent alle notater
app.get("/notes", (req, res) => {
  const data = readData();
  res.json(data.notes);
});

// Opprett notat
app.post("/notes", (req, res) => {
  const data = readData();
  const { title, text } = req.body;
  data.notes.push({ title, text });
  writeData(data);
  res.json({ success: true });
});

// Hent alle todos
app.get("/todos", (req, res) => {
  const data = readData();
  res.json(data.todos);
});

// Opprett todo
app.post("/todos", (req, res) => {
  const data = readData();
  const { title, items } = req.body; // items = [{ text, done }]
  data.todos.push({ title, items });
  writeData(data);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server kjører på http://localhost:${PORT}`);
}); 