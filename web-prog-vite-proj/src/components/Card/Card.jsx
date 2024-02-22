import './style.css'
import { images } from '../../const/links'
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
