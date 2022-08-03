import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard(props) {
  return (
    <div className="project-card">
      {props.external ? <a target="_blank" href={props.slug}>{props.title}</a> : <Link to={props.slug}>{props.title}</Link >}&nbsp;
      {props.children}
    </div>
  );
}

export default ProjectCard;