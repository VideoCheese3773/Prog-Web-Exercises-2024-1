import './style.css'

import { Card } from '../Card/Card'

export function Body() {
    return (
        <main>
            <h1 className='body-title'>Title of the Page</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et delectus, sint nulla architecto tenetur odit hic qui accusantium quae ut nostrum molestias, reiciendis laudantium. Dolor magni consequatur natus architecto.</h3>
            <Card />
            <div className='p-cont'>
                <p className='text-block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum error nemo provident eveniet numquam labore, pariatur illum cum veniam eaque maxime dolorem tempore in. Optio delectus quaerat beatae expedita consequatur.</p>
                <p className='text-block bg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti velit repellendus cum, porro est quidem quis excepturi, amet vel beatae enim nostrum quos. Blanditiis soluta id nisi aliquam quisquam.</p>
            </div>
            <Card />
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et delectus, sint nulla architecto tenetur odit hic qui accusantium quae ut nostrum molestias, reiciendis laudantium. Dolor magni consequatur natus architecto.</h3>
        </main>
    )
}
