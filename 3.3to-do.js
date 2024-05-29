const form = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskDateTime = document.getElementById('taskDateTime');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', addTask);
taskList.addEventListener('click', taskActions);

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    const taskTime = taskDateTime.value;
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <span>${formatTaskTime(taskTime)}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        taskDateTime.value = '';
    }
}

function taskActions(event) {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    } else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.classList.toggle('completed');
    }
}

function formatTaskTime(datetime) {
    const dateTimeObject = new Date(datetime);
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return dateTimeObject.toLocaleString('en-US', options);
}
