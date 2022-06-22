import React from 'react'
import "../gif-app.css"
const GifGridItem = ({ image, title, creator }) => {
  return (
    <div>
        <li className='appear'>
            <img src={image} alt={title}/>
            <p>{title}</p>
            <p>{creator}</p>
        </li>
    </div>
  )
}

export default GifGridItem