import React from 'react'

import Input from './input/Input.js'

export default class UpdateModal extends React.Component {
    constructor (props) {
        super(props)
        
        this.initialState = {}
        
        this.state = {}

        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleCellChange = this.handleCellChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleStreetChange = this.handleStreetChange.bind(this)
        this.handleCityChange = this.handleCityChange.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.handlePostalCodeChange = this.handlePostalCodeChange.bind(this)
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    componentDidMount () {
        this.setState({ employee: this.props.employee })
    }
    
    componentDidUpdate (prevProps, prevState) {
        if (prevProps.modalOpen && !this.props.modalOpen) {
            this.setState({ employee: this.props.employee })
            window.removeEventListener('keydown', this.handlekeydown)
        } else if (!prevProps.modalOpen && this.props.modalOpen) {
            this.setState({ employee: this.props.employee })
            window.addEventListener('keydown', this.handleKeyPress)
        }
    }

    handleUpdate (e) {
        e.preventDefault()
        
        const data = {
            first_name: this.state.employee.first_name,
            last_name: this.state.employee.last_name,
            email: this.state.employee.email,
            department: this.state.employee.department,
            title: this.state.employee.title,
            phone: this.state.employee.phone,
            cell: this.state.employee.cell,
            ...this.state.employee.address
        }

        this.props.updateEmployee(data)
        this.props.handleModalStateChange()
    }

    handleFirstNameChange (e) {
        const employee = {...this.state.employee}
        employee.first_name = e.target.value
        this.setState({ employee })
    }

    handleLastNameChange (e) {
        const employee = {...this.state.employee}
        employee.last_name = e.target.value
        this.setState({ employee })
    }

    handleTitleChange (e) {
        const employee = {...this.state.employee}
        employee.title = e.target.value
        this.setState({ employee })
    }

    handleEmailChange (e) {
        const employee = {...this.state.employee}
        employee.email = e.target.value
        this.setState({ employee })
    }

    handleCellChange (e) {
        const employee = {...this.state.employee}
        employee.cell = e.target.value
        this.setState({ employee })
    }

    handlePhoneChange (e) {
        const employee = {...this.state.employee}
        employee.phone = e.target.value
        this.setState({ employee })
    }

    handleStreetChange (e) {
        const employee = {...this.state.employee}
        employee.address.street = e.target.value
        this.setState({ employee })
    }

    handleCityChange (e) {
        const employee = {...this.state.employee}
        employee.address.city = e.target.value
        this.setState({ employee })
    }

    handleStateChange (e) {
        const employee = {...this.state.employee}
        employee.address.state = e.target.value
        this.setState({ employee })
    }

    handlePostalCodeChange (e) {
        const employee = {...this.state.employee}
        employee.address.postal_code = e.target.value
        this.setState({ employee })
    }

    handleDepartmentChange (e) {
        const employee = {...this.state.employee}
        employee.department = e.target.value
        this.setState({ employee })
    }

    handleKeyPress (e) {
      if (e.code === 'Escape' && this.props.modalOpen) {
          this.props.handleModalStateChange()
      }
    }
    
    render () {
        if (this.props.modalOpen) {
            return (
                <div className="modal-outer-container">
                  <div className="modal-inner-container">
                    <div className="modal">
                      <div className="employee-update-modal">
                        <h1>Update Employee</h1>
                        <form onSubmit={this.handleUpdate}>
                            <h3>Primary Info</h3>
                            <div className="modal-input-group">
                              <Input type='text' 
                                label={'First name'}
                                value={this.state.employee.first_name} 
                                onChange={this.handleFirstNameChange} />
                              <Input type='text' 
                                label={'Last Name'}
                                value={this.state.employee.last_name} 
                                onChange={this.handleLastNameChange} />
                              <Input type='text' 
                                label={'Title'}
                                value={this.state.employee.title} 
                                onChange={this.handleTitleChange} />
                              <Input type='text' 
                                label={'Department'}
                                value={this.state.employee.department} 
                                onChange={this.handleDepartmentChange} />
                              <Input type='email' 
                                label={'Email'}
                                value={this.state.employee.email} 
                                onChange={this.handleEmailChange} />
                              <Input type='text'
                                label={'Cell'}
                                value={this.state.employee.cell} 
                                onChange={this.handleCellChange} />
                              <Input type='text' 
                                label={'Phone'}
                                value={this.state.employee.phone} 
                                onChange={this.handlePhoneChange} />
                            </div>
                            <h3>Address</h3>
                            <div className="modal-input-group">
                              <Input type='text' 
                                label={'Street'}
                                value={this.state.employee.address.street} 
                                onChange={this.handleStreetChange} />
                              <Input type='text' 
                                label={'City'}
                                value={this.state.employee.address.city} 
                                onChange={this.handleCityChange} />
                              <Input type='text' 
                                label={'State'}
                                value={this.state.employee.address.state} 
                                onChange={this.handleStateChange} />
                              <Input type='text' 
                                label={'ZIP Code'}
                                value={this.state.employee.address.postal_code} 
                                onChange={this.handlePostalCodeChange} />
                            </div>
                            <div className="modal-input-group">
                              <input type='submit' />
                            </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            )
        }
        
        return null
    }
}