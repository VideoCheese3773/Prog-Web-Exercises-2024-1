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

    return (
        <main>
            <TodoList checkBtn={checkBtn} addTask={addTask}/>
        </main>
    )
}
