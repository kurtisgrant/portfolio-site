import React from 'react'
import './Button.css'

function Button({onPress, href, children, classes}) {
  return (
    <a onClick={onPress} className={'btn ' + classes} href={href || '#'}>{children}</a>
  )
}

export default Button