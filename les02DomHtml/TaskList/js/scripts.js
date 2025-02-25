document.querySelector('#frmTask').onsubmit = function(e) {
	e.preventDefault();
	const text = document.querySelector('#txtTask').value;
	const priority = document.querySelector('#selPriority').value;
	const deadline = document.querySelector('#datDeadline').value || 'Geen deadline';
 
	const task = document.createElement('div');
	task.className = 'task';
 
	const prioritySpan = document.createElement('span');
	prioritySpan.className = 'priority material-icons';
	prioritySpan.textContent = 'assignment';
	prioritySpan.style.color = { 'high': 'red', 'normal': 'orange', 'low': 'green' }[priority];
 
	const taskText = document.createElement('p');
	taskText.className = 'tasktext';
	taskText.innerHTML = `${text} <span class="deadline">(Deadline: ${deadline})</span>`;
 
	const completeSpan = document.createElement('span');
	completeSpan.className = 'complete material-icons';
	completeSpan.textContent = 'more_horiz';
	completeSpan.onclick = () => { completeSpan.style.color = completeSpan.style.color === 'grey' ? '' : 'grey'; task.classList.toggle('completed'); };
 
	task.append(prioritySpan, taskText, completeSpan);
	document.querySelector('#tasks').appendChild(task);
	e.target.reset();
};