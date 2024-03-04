import './style.css'
import { TodoList } from '../TodoList/TodoList'
import { TodoFooter } from '../TodoFooter/TodoFooter'
import { Task } from '../Task/Task'

export function Body() {

    const checkBtn = () => {
        alert("checkBtn")
    }

    const addTask = () => {
        alert("addTask")
    }

    const compTasks = () => {
        alert("compTasks")
        //? Could be an UserState??
    }

    const allTasks = () => {
        alert("allTasks")
        //? Could be an UserState??
    }

    return (
        <main>
            <TodoList checkBtn={checkBtn} addTask={addTask}/>
            <div id='taskContainer'>

            </div>
            <TodoFooter compTasks={compTasks} allTasks={allTasks}/>
        </main>
    )
}
