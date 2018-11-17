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
      employees: []
    }

    this.searchHandler = this.searchHandler.bind(this)
  }

  componentDidMount () {
    fetcher({ url: '/api/employees/'})
      .then(response => this.setState({ employees: response.data }))
  }

  searchHandler (e) {
    this.setState({ searchValue: e.target.value })
  }

  render () {
    return (
      <Router history={history}>
        <React.Fragment>
          <Route exact path='/' render={(props) => <HomePage searchHandler={this.searchHandler} {...this.state} />} />
          <Route exact path='/:id' component={EmployeePage} />
        </React.Fragment>
      </Router>
    )
  }
}
