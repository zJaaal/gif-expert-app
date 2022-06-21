import { useState } from 'react'
import { getGifBySearchQuery } from './axios'
import AddCategory from './components/AddCategory';
import "./gif-app.css"

function GifApp() {
  const categories = ["Mr. Robot", "Dark", "Moon Knight"];

  // const [categories, setCategories] = useState(initialCategories);

  // const handleAdd = () =>{
  //   setCategories([...categories, "Ms. Marvel"]);
  // }
    return (
              <>
                <h2 className='header'>Gif App</h2>
                <AddCategory></AddCategory>
                <hr />
                {/* <button onClick={handleAdd}>Add</button> */}
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
