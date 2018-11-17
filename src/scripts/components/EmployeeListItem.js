import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeListItem = props => {
  let {
    image,
    first_name,
    last_name,
    department,
    id,
    email
  } = props.employee

  first_name = first_name[0].toUpperCase() + first_name.slice(1)
  last_name = last_name[0].toUpperCase() + last_name.slice(1)
  const full_name = first_name + ' ' + last_name

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
