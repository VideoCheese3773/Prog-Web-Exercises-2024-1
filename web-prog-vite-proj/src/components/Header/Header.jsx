import './style.css'

export function Header() {
    return (
        <header>
            <h2 className='headTitle pc'>Reputable Brand Page</h2>
            <h2 className='headTitle mobile'>RBP</h2>
            <div className='btnContainer'>
                <button className='headBtn'>Button 1</button>
                <button className='headBtn'>Button 2</button>
                <button className='headBtn'>Button 3</button>
            </div>
        </header>
    )
}