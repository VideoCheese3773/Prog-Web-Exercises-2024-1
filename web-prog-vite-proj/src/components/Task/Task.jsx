import './style.css'

export function Task ({id, text, checkFunc, delFunc}) {
    return(
        <div id={id}>
            <input onClick={checkFunc} type="checkbox" name="taskCheck" id="" />
            <p>{text}</p>
            <button onClick={delFunc}>Delete</button>
        </div>
    )
}