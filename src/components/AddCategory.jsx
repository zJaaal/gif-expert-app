import React, { Fragment, useState } from 'react'
import "../gif-app.css"

const AddCategory = () => {
    const [inputValue, setInputValue] = useState("Hello World");
    const handleInputChange = (evt) => {
        setInputValue(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault(); //This prevents the re rendering triggered by submit action
        console.log("Submitted");
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                className="add-category" 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
      )
}

export default AddCategory