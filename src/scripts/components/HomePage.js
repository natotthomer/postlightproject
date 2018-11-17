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
        <ReactPaginate pageCount={this.props.numPages} onPageChange={this.props.onPageChange} />
      </React.Fragment>
      )
  }
}
