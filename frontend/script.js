const apiUrl = 'http://127.0.0.1:5000/tasks';

document.getElementById('taskForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const due_date = document.getElementById('due_date').value;

  await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, due_date })
  });

  document.getElementById('taskForm').reset();
  loadTasks();
});

async function loadTasks() {
  const response = await fetch(apiUrl);
  const tasks = await response.json();
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${task.title}</strong> (${task.status}) <br>
      ${task.description || ''} <br>
      Due: ${task.due_date || 'No due date'} <br>
      <button onclick="toggleTaskStatus(${task.id}, '${task.status}')">Toggle Status</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

async function toggleTaskStatus(id, currentStatus) {
  const newStatus = currentStatus === 'Pending' ? 'Completed' : 'Pending';
  await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: newStatus })
  });
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
  loadTasks();
}

function filterTasks(status) {
  loadTasks().then(() => {
    if (status === 'All') return;
    const taskList = document.getElementById('taskList');
    [...taskList.children].forEach(li => {
      if (!li.innerHTML.includes(status)) li.style.display = 'none';
      else li.style.display = 'block';
    });
  });
}

loadTasks();
