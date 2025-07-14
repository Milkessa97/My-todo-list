function add(task,deadline){
    let row=`<tr class="rows">
                        <td class="task">${task}</td>
                        <td class="date">${deadline}</td>
                        <td>
                            <div class="buttons">
                                <button class="editBtn" data-mode="edit"><img src="images/edit-3.svg" alt="icon"></button>  
                                <button class="deleteBtn"><img src="images/trash.svg" alt="icon"></button>
                            </div>
                        </td>
                    </tr>`;
    let body=document.getElementById("layout");
    body.insertAdjacentHTML("beforeend",row);
}
document.getElementById('addBtn').addEventListener('click',
    function(event){
        event.preventDefault();
        let myTask=document.getElementById('taskInput').value;
        let deadline=document.getElementById('deadlineInput').value;
        if (myTask && deadline){
            add(myTask,deadline);
            document.getElementById('taskForm').reset();
        }
});
document.getElementById('layout').addEventListener('click', function(event) {
    if (event.target.closest('.deleteBtn')) {
        const row = event.target.closest('tr');
        row.remove();
    }
});
document.getElementById('layout').addEventListener('click', function(event) {
  const btn = event.target.closest('.editBtn');
    if (event.target.closest('.editBtn')){
    const row = btn.closest('tr');
    const taskCell = row.querySelector('.task');
    const dateCell = row.querySelector('.date');
    const mode=btn.getAttribute('data-mode');
    if(mode=='edit'){
        taskCell.innerHTML=`<input type="text" placeholder="Updated task" id="taskInput" value="${taskCell.textContent}">`;
        dateCell.innerHTML=`<input type="date" placeholder="Updated date" id="deadlineInput" value="${dateCell.textContent}">`;
        btn.innerHTML="<img src='images/save.svg'>";
        btn.setAttribute('data-mode','save');
    }else{
        const newTask = taskCell.querySelector('input').value;
        const newDate = dateCell.querySelector('input').value;
        taskCell.textContent=newTask;
        dateCell.textContent=newDate;
        btn.innerHTML="<img src='images/edit-3.svg'>";
        btn.setAttribute('data-mode','edit')
    }
}
});