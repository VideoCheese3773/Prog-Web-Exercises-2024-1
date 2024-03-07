import './style.css'

export function Task ({id, text, completion, checkFunc, delFunc}) {
    return(
        <div id={id}>
            <input onClick={checkFunc} type="checkbox" name="taskCheck" id="" />
            <p className={completion}>{text}</p>
            <button onClick={delFunc}>Delete</button>
        </div>
    )
}