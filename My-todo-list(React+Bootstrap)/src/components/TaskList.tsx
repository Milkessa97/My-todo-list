import TaskItem from "./TaskItem";
import { useState } from "react";
interface Task {
  id: string;
  description: string;
  dueDate: string;
  completed: boolean;
}
function TaskList(){
    const [tasks, setTasks] = useState<Task[]>([]);
    const [description,setDescription] = useState("");
    const [dueDate,setDueDate]=useState("");
    const handleAddTask=()=>{
        if (!description || !dueDate) return;
        const newTask: Task = {
            id: crypto.randomUUID(),
            description,
            dueDate,
            completed: false
        }
        setTasks([...tasks,newTask])
        setDueDate("")
        setDescription("")
    }
    const handleDelete = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
    const handleComplete = (id: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };
    return(
        <>
        <div className="mb-3" style={{width:'60%', padding:'1.5em',border:'0.15em solid black', borderRadius:'0.5em',margin:'2em 20% 2em 20%'}}>
            <label className="form-label">Task Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}  placeholder="Task description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <label className="form-label">Task Deadline</label>
            <input type="date" className="form-control" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            <button className="btn btn-primary" onClick={handleAddTask} style={{margin:'0.8em'}}>Add Task</button>
        </div>
        <div className="container mt-3">
            <h3>My Tasks</h3>
            {tasks.length === 0 && <p className="text-muted">No tasks available.</p>}
            {tasks.map((task) => (
                <TaskItem
                key={task.id}
                id={task.id}
                description={task.description}
                dueDate={task.dueDate}
                completed={task.completed}
                onDelete={handleDelete}
                onComplete={handleComplete}
                />
            ))}
        </div>
        </>
    )
}
export default TaskList;