import React from 'react';
import './Stylepages/Projects.scss';
import ProjectsList from '../components/ProjectsList/ProjectList'; 
function Projects() {
  return (
    <div>
      <section className="Project-container">
      <h1>Mes projets Openclassroom</h1>
        <ProjectsList/>
      </section>
      
      
    </div>
  );
}

export default Projects;
