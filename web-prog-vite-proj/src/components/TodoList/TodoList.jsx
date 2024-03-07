import './style.css'

export function TodoList({ checkBtn, addTask }) {
    return (
        <>
            <form onSubmit={addTask}>
                <input onChange={checkBtn} type="text" id="taskInput" />
                <button type="submit">Submit</button>
            </form>
            <div className='filterComp'>
                <div className='filter'>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">All</label>
                </div>
                <div className='filter'>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">Completed</label>
                </div>
                <div className='filter'>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">Pending</label>
                </div>
            </div>
        </>
    )
}

//TODO add filters in another div