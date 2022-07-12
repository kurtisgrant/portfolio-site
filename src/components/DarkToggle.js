import React from 'react'
import Button from './Button'
import './DarkToggle.css'
import { ReactComponent as Moon } from '../docs/moon.svg'
import { ReactComponent as Sun } from '../docs/sun.svg'

function DarkToggle(props) {
  return (
    <Button>{props.isDark ? <Moon /> : <Sun />}</Button>
  )
}

export default DarkToggle