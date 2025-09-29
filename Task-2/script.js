// script.js
document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const list = document.getElementById('taskList');

  function addTask() {
    const taskText = input.value.trim();
    if (!taskText) return;
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.className = 'todo-text';

    span.addEventListener('click', function() {
      span.classList.toggle('completed');
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', function() {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    list.appendChild(li);
    input.value = '';
    input.focus();
  }

  addBtn.addEventListener('click', addTask);

  input.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') addTask();
  });
});
