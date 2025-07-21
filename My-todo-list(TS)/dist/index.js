"use strict";
var _a, _b, _c;
function add(task, deadline) {
    const row = `<tr class="rows">
        <td class="task">${task}</td>
        <td class="date">${deadline}</td>
        <td>
            <div class="buttons">
                <button class="editBtn" data-mode="edit"><img src="images/edit-3.svg" alt="icon"></button>  
                <button class="deleteBtn"><img src="images/trash.svg" alt="icon"></button>
            </div>
        </td>
    </tr>`;
    const body = document.getElementById("layout");
    if (body) {
        body.insertAdjacentHTML("beforeend", row);
    }
}
(_a = document.getElementById('addBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const deadlineInput = document.getElementById('deadlineInput');
    const myTask = taskInput.value;
    const deadline = deadlineInput.value;
    if (myTask && deadline) {
        add(myTask, deadline);
        const form = document.getElementById('taskForm');
        form.reset();
    }
});
(_b = document.getElementById('layout')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function (event) {
    const target = event.target;
    if (target.closest('.deleteBtn')) {
        const row = target.closest('tr');
        row === null || row === void 0 ? void 0 : row.remove();
    }
});
(_c = document.getElementById('layout')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function (event) {
    var _a, _b;
    const target = event.target;
    const btn = target.closest('.editBtn');
    if (btn) {
        const row = btn.closest('tr');
        const taskCell = row === null || row === void 0 ? void 0 : row.querySelector('.task');
        const dateCell = row === null || row === void 0 ? void 0 : row.querySelector('.date');
        const mode = btn.getAttribute('data-mode');
        if (mode === 'edit') {
            taskCell.innerHTML = `<input type="text" placeholder="Updated task" value="${((_a = taskCell.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ''}">`;
            dateCell.innerHTML = `<input type="date" placeholder="Updated date" value="${((_b = dateCell.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || ''}">`;
            btn.innerHTML = `<img src='images/save.svg'>`;
            btn.setAttribute('data-mode', 'save');
        }
        else {
            const taskInput = taskCell.querySelector('input');
            const dateInput = dateCell.querySelector('input');
            taskCell.textContent = taskInput === null || taskInput === void 0 ? void 0 : taskInput.value;
            dateCell.textContent = dateInput === null || dateInput === void 0 ? void 0 : dateInput.value;
            btn.innerHTML = `<img src='images/edit-3.svg'>`;
            btn.setAttribute('data-mode', 'edit');
        }
    }
});
