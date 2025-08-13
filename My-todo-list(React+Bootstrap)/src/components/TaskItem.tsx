interface Props{
    id:string,
    description:string,
    completed:boolean,
    dueDate:string,
    onDelete: (id:string) => void,
    onComplete: (id: string) => void
}
function TaskItem({id,description,completed,dueDate,onDelete,onComplete} : Props){
    return(
        <>
        <ul className="list-group">
            
            <li className={'list-group-item d-flex justify-content-between align-items-center ${completed ? "disabled text-muted" : ""}'}>
                <div className="form-check">
                    <input className="form-check-input me-2" type="checkbox" checked={completed} onChange={() => onComplete(id)} id={`check-${id}`}/>
                    <label className="form-check-label" htmlFor={`check-${id}`}>
                        <p className="mb-0" style={{fontSize:"1.1em"}}>{description}</p>
                        <small>Deadline: {dueDate}</small>
                    </label>
                </div>
                <div style={{width:"10%",minWidth:"6em",display:"flex",justifyContent:"space-around"}}>
                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(id)}> 🗑️ </button>
                </div>
            </li>
            
        </ul>
        </>
    )

}
export default TaskItem;