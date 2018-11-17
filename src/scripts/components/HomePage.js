import React from 'react'
import ReactPaginate from 'react-paginate'

import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

export default class HomePage extends React.Component {
  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        <Header text={'Browse Directory'} />
        <SearchBar searchHandler={this.props.searchHandler}
          searchValue={this.props.searchValue} />
        <EmployeeList employees={this.props.employees} />
        <div className="employee-list-paginator-container">
          <ReactPaginate
            pageCount={this.props.numPages}
            onPageChange={this.props.onPageChange}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            containerClassName={'employee-list-paginator'}
            activeClassName={'employee-list-paginator-active'}
            nextClassName={'employee-list-paginator-page'}
            previousClassName={'employee-list-paginator-page'}
            pageClassName={'employee-list-paginator-page'}
            breakClassName={'employee-list-paginator-break'} />
          </div>
      </React.Fragment>
    )
  }
}
