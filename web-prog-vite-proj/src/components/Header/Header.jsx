import { useState } from 'react';
import { links } from '../../const/links';
import './style.css'

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

                <button onClick={handleClick} className='hamburger-menu'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="hamburger menu" />
                </button>
            </div>

            <Menu
                items={links}
                showMenu={showMenu}
            />
        </header>
    )
}

function Menu({ items, showMenu }) {
    return (
        <nav className={!showMenu ? 'hidden' : ''}>
            <ul className='btn-container'>
                {
                    items.map(({ id, text }) => {
                        return (
                            <li className='head-btn' key={id}>{text}</li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}