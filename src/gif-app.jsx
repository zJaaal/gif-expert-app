import { useState } from 'react'
import { getGifBySearchQuery } from './axios'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import "./gif-app.css"

function GifApp() {

  const [categories, setCategories] = useState(["Mr. Robot"]);

    return (
              <>
                <h2 className='header'>Gif App</h2>
                <AddCategory setCategories={ setCategories } />
                <hr />
                <ul>
                    {
                      categories.map((cat, i)=>
                        <GifGrid key={i} 
                                category={cat} 
                        />
                      )
                    }
                </ul>
              </>
    )
}

export default GifApp
