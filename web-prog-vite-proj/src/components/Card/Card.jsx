import './style.css'

import img1 from '../../images/photo-1.jpg'
import img2 from '../../images/photo-2.jpg'
import img3 from '../../images/photo-3.jpg'
import img4 from '../../images/photo-4.jpg'
import img5 from '../../images/photo-5.jpg'
import img6 from '../../images/photo-6.jpg'
import img7 from '../../images/photo-7.jpg'
import img8 from '../../images/photo-8.jpg'
import img9 from '../../images/photo-9.jpg'

const images = [
    {
        id: crypto.randomUUID(),
        src: img1,
        title: "Books",
        text: "More books"
    },
    {
        id: crypto.randomUUID(),
        src: img2,
        title: "Flowers",
        text: "More flowers"
    },
    {
        id: crypto.randomUUID(),
        src: img3,
        title: "Coffee Shop",
        text: "More coffee"
    },
    {
        id: crypto.randomUUID(),
        src: img4,
        title: "Tower",
        text: "Big tower"
    },
    {
        id: crypto.randomUUID(),
        src: img5,
        title: "Vynil",
        text: "More vynils please"
    },
    {
        id: crypto.randomUUID(),
        src: img6,
        title: "Shopping Cart",
        text: "Give food please"
    },
    {
        id: crypto.randomUUID(),
        src: img7,
        title: "Hair",
        text: "Cool hair"
    },
    {
        id: crypto.randomUUID(),
        src: img8,
        title: "Drawings",
        text: "Very color, much wow"
    },
    {
        id: crypto.randomUUID(),
        src: img9,
        title: "Dress",
        text: "White is the new black"
    }
]
console.log(images);

//todo change css class from asdfAsdf to asdf-asdf

export function Card() {
    return (
        <div className='card-container'>
            {
                images.map(({id, src, title, text}) =>
                    <div className='main-div' key={id}>
                        <img className='card-img' src={src} alt="stockImage" />
                        <div className='text-div'>
                            <h2 className='card-title'>{title}</h2>
                            <p className='card-desc'>{text}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
