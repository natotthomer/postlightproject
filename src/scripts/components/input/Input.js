import React from 'react'

const TEXT = 'text'
const EMAIL = 'email'
const SUBMIT = 'submit'

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
        case SUBMIT: {
          return <input type='submit' />
        }
    }
}

export default Input