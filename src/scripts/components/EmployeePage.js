import React from 'react'

import fetcher from '../utils/fetcher'
import Header from './Header'

export default class EmployeePage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    fetcher({ url: `/api/employees/${this.props.match.params.id}`})
      .then(response => this.setState(response.data))
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

      return (
        <React.Fragment>
          <Header text={this.state.full_name} id={this.state.id} />
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
          </div>
        </React.Fragment>
      )
    } else {
      return null
    }
  }
}
