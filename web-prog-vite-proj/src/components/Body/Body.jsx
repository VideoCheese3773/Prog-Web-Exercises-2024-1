import './style.css'
import { useState } from 'react'
import { TodoList } from '../TodoList/TodoList'
import { TodoFooter } from '../TodoFooter/TodoFooter'
import { Task } from '../Task/Task'

export function Body() {

    const checkBtn = () => {
        alert("checkBtn")
    }

    const addTask = (e) => {
        e.preventDefault() //! Avoids reloading the whole page on submit

        let newTask = {
            id: crypto.randomUUID(),
            text: "test",
            completion: "pending"
        }
        setAllTasks([newTask, ...allTasks])
        console.log(allTasks);
    }

    const checkFunc = () => {
        alert("checkFunc")
    }

    const delFunc = () => {
        alert("delFunc")
    }

    const [compTasks, setCompTasks] = useState(0)

    const [allTasks, setAllTasks] = useState([{
        id: crypto.randomUUID(),
        text: "test",
        completion: "pending"
    }])

    return (
        <main>
            <TodoList checkBtn={checkBtn} addTask={addTask} />

            <div>
            {
                allTasks.map(({ id, text, completion }) => {
                    <Task id={id} text={text} completion={completion} checkFunc={checkFunc} delFunc={delFunc} />
                })
            }
        </div>
            <TodoFooter compTasks={compTasks} allTasks={allTasks.length} />
        </main>
    )
}

function TaskCompiler({ allTasks, checkFunc, delFunc }) {
    return (
        <div>
            {
                allTasks.map(({ id, text, completion }) => {
                    <Task id={id} text={text} completion={completion} checkFunc={checkFunc} delFunc={delFunc} />
                })
            }
        </div>
    )
}

//<TaskCompiler allTasks={allTasks} checkFunc={checkFunc} delFunc={delFunc} />