import './style.css'
import { Counter } from '../Counter/Counter'
import { Button } from '../Button/Button'
import { Facts } from '../Facts/Facts'

import { useState } from 'react'

export function Body() {
    const startValue = 0
    const [count, setCount] = useState(startValue)

    const countUp = (event) => {
        setCount(count + 1)
    }

    const countDown = (event) => {
        count > 0 ?
            setCount(count - 1)
            :
            alert("Count can't be less than 0")
    }

    const countReset = (event) => {
        setCount(startValue)
    }

    const btnUp = {
        className: 'btnUp',
        clickFunction: countUp,
        text: '+'
    }

    const btnDown = {
        className: 'btnDown',
        clickFunction: countDown,
        text: '-'
    }

    const btnReset = {
        className: 'btnReset',
        clickFunction: countReset,
        text: 'RESET'
    }

    return (
        <main>
            <div className='centralDiv'>
                <Button className={btnDown.className} clickFunction={btnDown.clickFunction} text={btnDown.text} />
                <Counter count={count} />
                <Button className={btnUp.className} clickFunction={btnUp.clickFunction} text={btnUp.text} />
            </div>
            <Button className={btnReset.className} clickFunction={btnReset.clickFunction} text={btnReset.text} />
            <Facts count={count} />
        </main>
    )
}
