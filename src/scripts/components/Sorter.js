import React from 'react'

const Sorter = props => {
    const sortOptions = [
        {
            value: 'department',
            visibleName: 'Department'
        },
        {
            value: 'last_name',
            visibleName: 'Last Name'
        },
        {
            value: 'email',
            visibleName: 'Email'
        },
        {
            value: 'id',
            visibleName: 'ID'
        }
    ]

    const renderArrow = field => {
        if (field === props.sortBy) {
            return props.sortDirection === '' ? '\u25b2' : '\u25bc'
        }
    }

    const clickHandler = e => {
        const { value } = e.target
        let sortDirection 

        if (value === props.sortBy) {
            sortDirection = props.sortDirection === '' ? '-' : ''
        } else {
            sortDirection = ''
        }
        props.sortHandler(value, sortDirection)
    }

    const buttons = sortOptions.map((option, idx) => {
        return (
            <button value={option.value}
                key={idx}
                onClick={clickHandler}>
                {option.visibleName} {renderArrow(option.value)}
            </button>

        )
    })
    
    return (
        <div>
            {buttons}
        </div>
    )
}

export default Sorter