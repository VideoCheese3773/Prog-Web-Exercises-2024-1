import React from 'react'
import './style.css'

export function Header() {
    return (
        <header>
            <h2>Reputable Brand Page</h2>
            <div className='btnContainer'>
                <button>Button 1</button>
                <button>Button 2</button>
                <button>Button 3</button>
            </div>
        </header>
    )
}