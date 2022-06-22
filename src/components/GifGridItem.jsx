import React from 'react'

const GifGridItem = ({ image, title, creator }) => {
  return (
    <div>
        <li>
            <img src={image} alt={title}/>
            <p>Title: {title}</p>
            <p>Creator: {creator}</p>
        </li>
    </div>
  )
}

export default GifGridItem