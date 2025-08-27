const taskList = document.getElementById("task-list");
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");

const API_URL = "http://localhost:3000/tasks";




// Função para carregar tarefas
function loadTasks() {
  fetch(API_URL)
    .then(res => res.json())
    .then(tasks => {
      taskList.innerHTML = "";
      tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.title;
        li.style.textDecoration = task.completed ? "line-through" : "none";

        // Checkbox para marcar como completa
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTask(task.id, checkbox.checked));

        // Botão de deletar
        const delBtn = document.createElement("button");
        delBtn.textContent = "Deletar";
        delBtn.addEventListener("click", () => deleteTask(task.id));

        li.prepend(checkbox);
        li.appendChild(delBtn);
        taskList.appendChild(li);
      });
    });
}

// Criar nova tarefa
form.addEventListener("submit", e => {
  e.preventDefault();
  const title = input.value.trim();
  if (!title) return;
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  })
    .then(res => res.json())
    .then(() => {
      input.value = "";
      loadTasks();
    });
});

// Marcar tarefa como completa/incompleta
function toggleTask(id, completed) {
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed })
  }).then(() => loadTasks());
}

// Deletar tarefa
function deleteTask(id) {
  fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() => loadTasks());
}

// Carregar tarefas ao iniciar
loadTasks();
