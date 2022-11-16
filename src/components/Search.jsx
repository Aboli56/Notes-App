import React from 'react'

const Search = ({handleSearchNote}) => {
  return (
    <div className='search'>
        <h2 className='search-icon'> <i className="fa-solid fa-magnifying-glass"></i></h2>
        <input type="text" onChange={(e)=>handleSearchNote(e.target.value)} placeholder="Type to Search...."/>
    </div>
  )
}

export default Search;
