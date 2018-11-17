import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeListItem = props => {
  let {
    image,
    department,
    full_name,
    id,
    email
  } = props.employee

  return (
    <Link to={`/${id}`} className="employee-list-item">
      <div className="employee-list-item-thumbnail">
        <div>
          <img src={props.employee.image} />
        </div>
      </div>
      <div className="employee-list-item-info">
        <div className="employee-list-item-info-upper">
          <span className="employee-list-item-name">{full_name}</span>
          <span className="employee-list-item-department">{department}</span>
        </div>
        <div className="employee-list-item-info-lower">
          <span className="employee-list-item-info-lower">{email}</span>
        </div>
      </div>
    </Link>
  )
}

export default EmployeeListItem
