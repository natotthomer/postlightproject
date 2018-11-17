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
      page: 0
    }

    this.searchHandler = this.searchHandler.bind(this)
    this.onPageChange = this.onPageChange.bind(this)
    this.fetchEmployees = this.fetchEmployees.bind(this)
  }

  componentDidMount () {
    this.fetchEmployees()
  }

  searchHandler (e) {
    this.setState({ searchValue: e.target.value })
  }

  fetchEmployees () {
    fetcher({ url: `/api/employees/?page=${this.state.page + 1}`})
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
              searchHandler={this.searchHandler} />} />
          <Route exact path='/:id' component={EmployeePage} />
        </React.Fragment>
      </Router>
    )
  }
}
