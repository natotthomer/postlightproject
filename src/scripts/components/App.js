import React from 'react'

import HomePage from './HomePage'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchValue: '',
      employees: ['1', '2']
    }

    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler (e) {
    this.setState({ searchValue: e.target.value })
  }

  render () {
    return (
      <HomePage>
        <Header />
        <SearchBar
          searchHandler={this.searchHandler}
          searchValue={this.state.searchValue} />
        <EmployeeList employees={this.state.employees} />
      </HomePage>
    )
  }
}
