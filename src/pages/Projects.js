import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css'

function Projects() {
  return (
    <main className="projects-page">
      <h1 className="heading">Projects</h1>
      <div className="project-container">
        <ProjectCard title="Smart Money" external slug="https://github.com/kurtisgrant/smart-money">is a teaching tool to introduce youth to the concept of investing, inflation and the benefits of leveraging compound interest. (React, NodeJS, Express, PostgreSQL, Socket.io)</ProjectCard>
        <ProjectCard title="Thordle" slug="thordle">is an adaptation of the word puzzle game Wordle. In addition as core gameplay logic, Thordle features complex conditional rendering, state management and CSS animations. It also supports light/dark mode and local storage of user stats. (React, Styled-Components, Framer Motion)</ProjectCard>
        <ProjectCard title="Interview Scheduler" external slug="https://github.com/kurtisgrant/scheduler">is a simple application which allows you to create, edit and delete interview appointments.</ProjectCard>
      </div>
    </main>
  );
}

export default Projects;