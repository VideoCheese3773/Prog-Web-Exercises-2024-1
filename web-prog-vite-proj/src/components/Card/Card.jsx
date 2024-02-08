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

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

export function Card() {
    return (
        <div className='cardContainer'>
            {
                images.map((images) =>
                    <div className='mainDiv' key={images}>
                        <img className='cardImg' src={images} alt="stockImage" />
                        <div className='textDiv'>
                            <h2 className='cardTitle'>
                                Title
                            </h2>
                            <p className='cardDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
