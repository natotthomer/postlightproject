import React from 'react'
import { Router, Route } from 'react-router-dom'

import fetcher from '../utils/fetcher'
import history from '../history'
import HomePage from './HomePage'
import EmployeePage from './EmployeePage'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchValue: '',
      numPages: undefined,
      employees: [],
      page: 0,
      sortBy: 'id',
      sortDirection: ''
    }

    this.searchHandler = this.searchHandler.bind(this)
    this.sortHandler = this.sortHandler.bind(this)
    this.fetchEmployees = this.fetchEmployees.bind(this)
    this.onPageChange = this.onPageChange.bind(this)
  }

  componentDidMount () {
    this.fetchEmployees()
  }

  searchHandler (value) {
    this.setState({ searchValue: value }, this.fetchEmployees)
  }

  sortHandler (sortBy, sortDirection) {
    this.setState({ sortBy, sortDirection }, this.fetchEmployees)
  }

  fetchEmployees () {
    fetcher({ url: `/api/employees/?page=${this.state.page + 1}&search=${this.state.searchValue}&order=${this.state.sortDirection + this.state.sortBy}`})
      .then(response => this.setState({
        employees: response.data,
        numPages: response.num_pages
      }))
  }

  onPageChange ({ selected }) {
    this.setState({ page: selected }, this.fetchEmployees)
  }

  render () {
    return (
      <Router history={history}>
        <React.Fragment>
          <Route exact path='/' render={(props) => <HomePage
              {...this.state}
              onPageChange={this.onPageChange}
              sortHandler={this.sortHandler}
              searchHandler={this.searchHandler} />} />
          <Route exact path='/:id' component={EmployeePage} />
        </React.Fragment>
      </Router>
    )
  }
}
