function add(task: string, deadline: string): void {
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

document.getElementById('addBtn')?.addEventListener('click', function (event: MouseEvent) {
    event.preventDefault();

    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const deadlineInput = document.getElementById('deadlineInput') as HTMLInputElement;

    const myTask = taskInput.value;
    const deadline = deadlineInput.value;

    if (myTask && deadline) {
        add(myTask, deadline);
        const form = document.getElementById('taskForm') as HTMLFormElement;
        form.reset();
    }
});

document.getElementById('layout')?.addEventListener('click', function (event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target.closest('.deleteBtn')) {
        const row = target.closest('tr');
        row?.remove();
    }
});

document.getElementById('layout')?.addEventListener('click', function (event: MouseEvent) {
    const target = event.target as HTMLElement;
    const btn = target.closest('.editBtn') as HTMLButtonElement | null;

    if (btn) {
        const row = btn.closest('tr');
        const taskCell = row?.querySelector('.task') as HTMLElement;
        const dateCell = row?.querySelector('.date') as HTMLElement;

        const mode = btn.getAttribute('data-mode');

        if (mode === 'edit') {
            taskCell.innerHTML = `<input type="text" placeholder="Updated task" value="${taskCell.textContent?.trim() || ''}">`;
            dateCell.innerHTML = `<input type="date" placeholder="Updated date" value="${dateCell.textContent?.trim() || ''}">`;
            btn.innerHTML = `<img src='images/save.svg'>`;
            btn.setAttribute('data-mode', 'save');
        } else {
            const taskInput = taskCell.querySelector('input') as HTMLInputElement;
            const dateInput = dateCell.querySelector('input') as HTMLInputElement;

            taskCell.textContent = taskInput?.value;
            dateCell.textContent = dateInput?.value;

            btn.innerHTML = `<img src='images/edit-3.svg'>`;
            btn.setAttribute('data-mode', 'edit');
        }
    }
});
