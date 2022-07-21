import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import Button from './Button'
import DarkToggle from './DarkToggle'

function Navbar({toggleTheme, darkMode}) {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <DarkToggle toggleTheme={toggleTheme} isDark={darkMode} />
      </nav>
    </div>
  )
}

export default Navbar