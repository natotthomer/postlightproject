import React from 'react'

const SearchBar = props => {
  const handleSearchChange = e => {
    props.searchHandler(e.target.value)
  }

  const clear = () => {
    props.searchHandler('')
  }

  return (
    <div className="search-container">
      <input type="search"
        className="search-bar"
        onChange={handleSearchChange}
        value={props.searchValue}
        placeholder={'Search employee directory'} />
      <input type="button"
        value="clear"
        onClick={clear}
        className="search-clear-button" />
    </div>
  )

}

export default SearchBar
