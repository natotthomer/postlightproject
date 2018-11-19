import React from 'react'

import history from '../history'
import fetcher from '../utils/fetcher'
import Header from './Header'
import UpdateModal from './UpdateModal'

export default class EmployeePage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      modalOpen: false
    }

    this.fetchEmployee = this.fetchEmployee.bind(this)
    this.updateEmployee = this.updateEmployee.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleModalStateChange = this.handleModalStateChange.bind(this)
  }

  componentDidMount () {
    this.fetchEmployee()
  }

  fetchEmployee () {
    fetcher({ url: `/api/employees/${this.props.match.params.id}`})
      .then(response => this.setState(response.data))
      .catch(error => this.props.handleMessage(error))
  }

  updateEmployee (newData) {
    fetcher({ 
      url: `/api/employees/${this.props.match.params.id}/update/`,
      method: 'POST',
      data: newData
    })
      .then(response => this.setState(response.data, this.props.handleMessage(response.message)))
      .catch(error => this.props.handleMessage(error))
  }

  handleDelete (e) {
    e.preventDefault()

    fetcher({ url: `/api/employees/${this.props.match.params.id}/delete/` })
      .then(response => this.props.handleMessage(response))
      .then(() => this.props.fetchEmployees())
      .then(() => history.push('/'))
      .catch(error => this.props.handleMessage(error))
  }

  handleModalStateChange () {
    this.setState({ modalOpen: !this.state.modalOpen })
  }


  render () {
    if (this.state.full_name) {
      const {
        full_name,
        department,
        title,
        address,
        email,
        cell,
        phone,
        dob
      } = this.state

      const { modalOpen, ...employee } = this.state
      return (
        <React.Fragment>
          <Header text={this.state.full_name} id={this.state.id} />
          <UpdateModal 
            employee={employee}
            modalOpen={modalOpen}
            handleModalStateChange={this.handleModalStateChange}
            updateEmployee={this.updateEmployee}
            fetchEmployee={this.fetchEmployee} />
          <div className="employee-info-card">
            <div className="employee-info-card-header">
              <div className="employee-info-card-image">
                <img src={this.state.image.large} />
              </div>
              <div className="employee-info-card-brief">
                <span className="employee-info-card-name">{full_name}</span>
                <span>{department}</span>
                <span>{title}</span>
              </div>
            </div>
            <div className="employee-info-card-detail">
              <div>{address.street}</div>
              <div>{address.city}, {address.state} {address.postal_code}</div>
              <div><a href={`mailto:${email}`}>{email}</a></div>
              <div>Cell: {cell}</div>
              <div>Home: {phone}</div>
              <div>Birthday: {dob}</div>
            </div>
            <div className="employee-page-crud-buttons">
              <button onClick={this.handleDelete}>Delete</button>
              <button onClick={this.handleModalStateChange}>Update</button>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return null
    }
  }
}
