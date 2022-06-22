import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "../gif-app.css"


const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (evt) => {
        setInputValue(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault(); //This prevents the re rendering triggered by submit action
        if(inputValue.trim().length === 0)return;

        setCategories( cat => [inputValue, ...cat]);
        setInputValue("");
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
};
AddCategory.propTypes ={
    setCategories : PropTypes.func.isRequired
};
export default AddCategory
