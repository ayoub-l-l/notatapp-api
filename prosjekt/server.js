const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const DB_FILE = "data.json";

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Hjelpefunksjoner
function readData() {
  try {
    return JSON.parse(fs.readFileSync(DB_FILE));
  } catch {
    return { notes: [], todos: [] };
  }
}

function writeData(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// ---------- Notater API ----------
app.get("/notes", (req, res) => {
  const data = readData();
  res.json(data.notes);
});

app.post("/notes", (req, res) => {
  const { title, text } = req.body;
  if (!title || !text) return res.status(400).json({ error: "Tittel og tekst kreves" });

  const data = readData();
  data.notes.push({ title, text });
  writeData(data);
  res.json({ success: true });
});

// ---------- Todo API ----------
app.get("/todos", (req, res) => {
  const data = readData();
  res.json(data.todos);
});

app.post("/todos", (req, res) => {
  const { title, items } = req.body;
  if (!title || !items || items.length === 0)
    return res.status(400).json({ error: "Tittel og minst ett element kreves" });

  const data = readData();
  data.todos.push({ title, items });
  writeData(data);
  res.json({ success: true });
});

// Start server
app.listen(PORT, () => console.log(`Server kjører på http://localhost:${PORT}`));