import 'style.css'

export function TodoList({ checkBtn, addTask }) {
    return (
        <>
            <form>
                <input onChange={checkBtn} type="text" name="" id="" />
                <button onClick={addTask} type="submit"></button>
            </form>
            <div>
                <div className='filter'>
                <input type="radio" name="" id="" />
                <label htmlFor=""></label>
                </div>
            </div>
        </>
    )
}

//TODO add filters in another div