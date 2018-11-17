import React from 'react'

import EmployeeListItem from './EmployeeListItem'

const EmployeeList = props => {
  const employees = props.employees.map((employee, idx) => {
    return <EmployeeListItem key={idx} employee={employee} />
  })

  return (
    <div className="employee-list">
      {employees}
    </div>
  )

}

export default EmployeeList
