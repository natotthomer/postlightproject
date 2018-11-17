import React from 'react'

const SearchBar = props => {
  return (
    <div className="search-container">
      <input type="search"
        className="search-bar"
        onChange={props.searchHandler}
        placeholder={'Search employee directory'} />
    </div>
  )

}

export default SearchBar
