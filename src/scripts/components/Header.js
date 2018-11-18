import React from 'react'
import history from '../history'

const Header = props => {
  const navigateBack = () => {
    history.push('/')
  }
  const backButton = props.id 
                   ? <button onClick={navigateBack} className="header-back-button">{`\u25c0 Back`}</button> : null
  
  return (
    <div className="header">
      {backButton}
      <span>{`${props.text}`}</span>
    </div>
  )

}

export default Header
