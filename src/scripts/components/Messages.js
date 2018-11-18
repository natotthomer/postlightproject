import React from 'react'

const Messages = props => {
    let message = null
    let messageClassName = ''

    if (props.message || props.error) {
        window.setTimeout(props.handleMessage, 2000)

        if (props.message) {
            message = props.message
            messageClassName = 'message'
        } else if (props.error) {
            message = props.error
            messageClassName = 'error'
        }
    }
    
    const containerClassName = "message-slider" + (message === null ? '' : ' message-open')
    return (
        <div className={containerClassName}>
            <div className={messageClassName}>{message}</div>
        </div>
    )
}

export default Messages