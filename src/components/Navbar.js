import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </div>
  )
}

export default Navbar