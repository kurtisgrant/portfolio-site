import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard(props) {
  return (
    <div className="project-card">
      <Link to={props.slug}>{props.title}</Link > {props.children}
    </div>
  )
}

export default ProjectCard