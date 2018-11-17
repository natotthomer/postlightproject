import React from 'react'

const EmployeeListItem = props => {
  console.log(props.employee)

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
    <div className="employee-list-item">
      <div className="employee-list-item-thumbnail">
        <img src={props.employee.image} />
      </div>
      <div className="employee-list-item-info">
        <div className="employee-list-item-info-upper">
          <div>{full_name}</div>
          <div>{department}</div>
        </div>
        <div className="employee-list-item-info-lower">
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </div>
  )
}

export default EmployeeListItem
