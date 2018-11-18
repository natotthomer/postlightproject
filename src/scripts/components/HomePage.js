import React from 'react'
import ReactPaginate from 'react-paginate'

import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

const HomePage = props => {
  const paginator = props.numPages > 1
                  ? <ReactPaginate
                      pageCount={props.numPages}
                      onPageChange={props.onPageChange}
                      pageRangeDisplayed={3}
                      marginPagesDisplayed={1}
                      containerClassName={'employee-list-paginator'}
                      activeClassName={'employee-list-paginator-active'}
                      nextClassName={'employee-list-paginator-page'}
                      previousClassName={'employee-list-paginator-page'}
                      pageClassName={'employee-list-paginator-page'}
                      breakClassName={'employee-list-paginator-break'} />
                  : null
  
  return (
    <React.Fragment>
      <Header text={'Browse Directory'} />
      <SearchBar searchHandler={props.searchHandler}
        searchValue={props.searchValue} />
      <EmployeeList employees={props.employees} />
      <div className="employee-list-paginator-container">
        {paginator}
      </div>
    </React.Fragment>
  )
}

export default HomePage
