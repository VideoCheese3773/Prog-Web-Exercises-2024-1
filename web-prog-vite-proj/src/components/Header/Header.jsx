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

//TODO Finish functionality of dropdown menu

export function Header() {
    const [showMenu, setShowMenu] = useState(false)

    console.log("state value", showMenu);

    const handleClick = (event) => {
        setShowMenu(!showMenu)
    }

    return (
        <header>
            <div className='header-row'>
                <h2 className='head-title pc'>Reputable Brand Page</h2>
                <h2 className='head-title mobile'>RBP</h2>

                <nav className='pc'>
                    <ul className='btn-container'>
                        {
                            links.map(({ id, text }) => {
                                return (
                                    <li className='head-btn' key={id}>{text}</li>
                                )
                            })
                        }
                    </ul>
                </nav>

                <button onClick={handleClick} className='hamburger-menu'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="hamburger menu" />
                </button>
            </div>

                {
                    showMenu
                        ? (
                            <nav className='mobile'>
                                <ul className='btn-container'>
                                    {
                                        links.map(({ id, text }) => {
                                            return (
                                                <li className='head-btn' key={id}>{text}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                        )
                        :
                        null
                }
        </header>
    )
}