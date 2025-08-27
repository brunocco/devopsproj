const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Garantir que a pasta "data" exista
if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data");
  console.log("📂 Pasta 'data' criada.");
}

// Criar banco SQLite
const db = new sqlite3.Database("./data/database.sqlite", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("✅ Conectado ao banco SQLite");
  }
});

// Criar tabela de tarefas
db.run(`CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  completed INTEGER DEFAULT 0
)`);

// Rotas CRUD

// Listar todas as tarefas
app.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Criar nova tarefa
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  db.run("INSERT INTO tasks(title) VALUES(?)", [title], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, title, completed: 0 });
  });
});

// Atualizar tarefa (completa/incompleta)
app.put("/tasks/:id", (req, res) => {
  const { completed } = req.body;
  db.run(
    "UPDATE tasks SET completed=? WHERE id=?",
    [completed ? 1 : 0, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
});

// Deletar tarefa
app.delete("/tasks/:id", (req, res) => {
  db.run("DELETE FROM tasks WHERE id=?", [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

app.listen(port, () => {
  console.log(`🚀 Backend rodando em http://localhost:${port}`);
});
