import React from 'react'

const TEXT = 'text'
const EMAIL = 'email'

const Input = props => {
    switch (props.type) {
        case TEXT: {
            return (
              <label>
                <span>{props.label}</span>
                <input type='text' value={props.value} onChange={props.onChange} />
              </label>
            )
            
        }
        case EMAIL: {
            return (
              <label>
                <span>{props.label}</span>
                <input type='email' value={props.value} onChange={props.onChange} />
              </label>
            )
        }
    }
}

export default Input