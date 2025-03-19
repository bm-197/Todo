document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.add_task input');
  const addTask = document.querySelector('.add_task button');
  const tasks = document.querySelector('.tasks');

  let TaskCnt = 0;
  addTask.addEventListener('click', () => {
    const taskText = input.value.trim();

    if (taskText !== "") {
      addTaskToDOM(taskText);

      tasks.style.opacity = 1;

      input.value = "";
      TaskCnt += 1;
      
      alert("Task added succefully")
    } else {
      alert("Please enter a task.");
    }
  });

  const addTaskToDOM = taskText => {
    const task = document.createElement('div');
    task.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskDesc = document.createElement('p');
    taskDesc.textContent = taskText;

    const deleteBtn = document.createElement('button');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = '../assets/delete-icon.svg';
    deleteIcon.alt = 'delete icon';
    deleteBtn.appendChild(deleteIcon);

    task.appendChild(checkbox);
    task.appendChild(taskDesc);
    task.appendChild(deleteBtn);

    tasks.appendChild(task);

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        taskDesc.style.opacity = 0.3;
        taskDesc.style.textDecoration = 'line-through';
      } else {
        taskDesc.style.opacity = 1;
        taskDesc.style.textDecoration = 'none';
      }
    });

    deleteBtn.addEventListener('click', () => {
      task.remove();

      TaskCnt -= 1;
      if (TaskCnt <= 0) {
        tasks.style.display = 'none';
      }
    });
  }

});
