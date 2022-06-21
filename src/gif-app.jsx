import { useEffect, useState } from 'react'
import { getGifBySearchQuery } from './axios'
import "./gif-app.css"

function GifApp() {
  const initialCategories = ["Mr. Robot", "Dark", "Moon Knight"];

  const [categories, setCategories] = useState(initialCategories);

  const handleAdd = () =>{
    setCategories([...categories, "Ms. Marvel"]);
  }
    return (
              <>
                <h2 className='header'>Gif App</h2>
                <hr />
                <button onClick={handleAdd}>Add</button>
                <ol>
                  {
                    categories.map((element, i)=>{
                      return <li key={i}>{element}</li>
                    })
                  }
                </ol>
              </>
    )
}

export default GifApp
