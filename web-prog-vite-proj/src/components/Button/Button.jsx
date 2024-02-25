export function Button ({className, clickFunction, text}) {
    return(
        <button className={className} onClick={clickFunction}>{text}</button>
    )
}