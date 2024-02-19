
import React from 'react'
import "./Search.css"

const Search = ({inputValue, onInputChange}) => {
  return (
    <div className='--form-control'>
      <input type="text" placeholder="search products" value={inputValue} onChange={onInputChange}/>
    </div>
  )
}

export default Search
