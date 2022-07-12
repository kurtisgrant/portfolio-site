import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import Button from './Button'
import DarkToggle from './DarkToggle'

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <Button href="https://google.com">DM</Button>
        <DarkToggle />
      </nav>
    </div>
  )
}

export default Navbar