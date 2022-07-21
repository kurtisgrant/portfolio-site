import React from 'react'
import Button from './Button'
import { ReactComponent as Moon } from '../docs/moon.svg'
import { ReactComponent as Sun } from '../docs/sun.svg'

function DarkToggle({toggleTheme, isDark}) {
  return (
    <Button classes="dark-toggle" onPress={toggleTheme}>{isDark ? <Sun /> : <Moon />}</Button>
  )
}

export default DarkToggle