import React, { useEffect, useState } from 'react'
import PropTypes  from 'prop-types'
import "../gif-app.css"
import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGif'

const GifGrid = ({ category }) => {
   const { data:images, loading } = useFetchGifs(category);
  return (
    <div>
        <h3>{ category }</h3>
        <ol>
            {loading && <p>Loading...</p>}
            {
                images.map((gif)=>{

                    return <GifGridItem 
                            key={gif.id} 
                            { ...gif } 
                            />
                })
            }
        </ol>
    </div>
  )
}
GifGrid.propTypes={
    category: PropTypes.string.isRequired
};
export default GifGrid