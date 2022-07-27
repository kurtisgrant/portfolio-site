import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css'

function Projects() {
  return (
    <main className="projects-page">
      <h1 className="heading">Projects</h1>
      <div className="project-container">
        <ProjectCard title="Test" slug="test-slug">This is some description of the "Test" Project.</ProjectCard>
        <ProjectCard title="Test" slug="test-slug">This is some description of the "Test" Project.</ProjectCard>
        <ProjectCard title="Test" slug="test-slug">This is some description of the "Test" Project.</ProjectCard>
      </div>
    </main>
  );
}

export default Projects;