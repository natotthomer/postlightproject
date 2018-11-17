import React from 'react'

import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

export default class HomePage extends React.Component {
  render () {
    return (
      <React.Fragment>
        HomePage
        <Header />
        <SearchBar
        searchHandler={this.props.searchHandler}
        searchValue={this.props.searchValue} />
        <EmployeeList employees={this.props.employees} />
      </React.Fragment>
      )
  }
}
