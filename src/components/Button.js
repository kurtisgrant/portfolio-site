import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <a className="btn" href={props.href || '#'}>{props.children}</a>
  )
}

export default Button