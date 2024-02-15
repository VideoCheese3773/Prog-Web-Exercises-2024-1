import { useState } from 'react';
import './style.css'

const links = [
    {
        id: crypto.randomUUID(),
        text: "Link 1"
    },
    {
        id: crypto.randomUUID(),
        text: "Link 2"
    },
    {
        id: crypto.randomUUID(),
        text: "Link 3"
    }
]
console.log(links);

const [showMenu ,setShowMenu] = useState(false)

console.log("state value", showMenu);

const handleClick = (event) => {
    setShowMenu(!showMenu)
}

//TODO Finish functionality of dropdown menu

export function Header() {
    return (
        <header>
            <h2 className='headTitle pc'>Reputable Brand Page</h2>
            <h2 className='headTitle mobile'>RBP</h2>

            <nav>
                <ul className='btnContainer'>
                    {
                        links.map(({ id, text }) => {
                            return (
                                <li className='headBtn' key={id}>{text}</li>
                            )
                        })
                    }
                </ul>
            </nav>

            <button className='hamburgerMenu'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="hamburger menu" />
            </button>
        </header>
    )
}