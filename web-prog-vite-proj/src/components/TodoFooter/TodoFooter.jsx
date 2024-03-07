import './style.css'

export function TodoFooter({ compTasks, allTasks }) {
    return (
        <div>
            <p>{compTasks} of {allTasks} Completed</p>
        </div>
    )

}