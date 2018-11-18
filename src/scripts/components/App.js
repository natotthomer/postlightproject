import React from 'react'
import { Router, Route } from 'react-router-dom'

import fetcher from '../utils/fetcher'
import history from '../history'
import HomePage from './HomePage'
import EmployeePage from './EmployeePage'
import Messages from './Messages'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchValue: '',
      numPages: undefined,
      employees: [],
      page: 0,
      sortBy: 'id',
      sortDirection: '',
      message: '',
      error: ''
    }

    this.searchHandler = this.searchHandler.bind(this)
    this.sortHandler = this.sortHandler.bind(this)
    this.fetchEmployees = this.fetchEmployees.bind(this)
    this.onPageChange = this.onPageChange.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
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
    return fetcher({ url: `/api/employees/?page=${this.state.page + 1}&search=${this.state.searchValue}&order=${this.state.sortDirection + this.state.sortBy}`})
      .then(response => this.setState({
        employees: response.data,
        numPages: response.num_pages
      }))
  }

  handleMessage (response) {
    if (!response) {
      this.setState({ message: '', error: '' })
    } else if (response.message) {
      this.setState({ message: response.message })
    } else if (response.error) {
      this.setState({ error: response.error }, () => history.push('/'))
    }
  }

  onPageChange ({ selected }) {
    this.setState({ page: selected }, this.fetchEmployees)
  }

  render () {
    return (
      <Router history={history}>
        <React.Fragment>
          <Messages 
            handleMessage={this.handleMessage}
            message={this.state.message} 
            error={this.state.error} />
          <Route exact path='/' render={(props) => <HomePage
              {...this.state}
              onPageChange={this.onPageChange}
              sortHandler={this.sortHandler}
              searchHandler={this.searchHandler} />} />
          <Route exact path='/:id' render={(props) => <EmployeePage {...props}
              fetchEmployees={this.fetchEmployees}
              handleMessage={this.handleMessage} />} />
        </React.Fragment>
      </Router>
    )
  }
}
