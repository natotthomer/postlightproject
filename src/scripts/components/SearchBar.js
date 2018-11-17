import React from 'react'

const SearchBar = props => {
  return (
    <div className="search-container">
      <input type="search" className="search-bar" onChange={props.searchHandler} />
    </div>
  )

}

export default SearchBar
