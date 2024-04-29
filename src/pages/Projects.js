import React from 'react';
import './Stylepages/Projects.scss';
import ProjectsList from '../components/ProjectsList/ProjectList'; 
import Carousel from '../components/Carousel/Carousel';


function Projects() {
  return (
    <div>
      <section className="Project-container">
      <h1>Mes projets Openclassroom</h1>
        <ProjectsList/>
      </section>
      <section className="Carousel-container">
        <h2>Autres projets</h2>
        <Carousel/>
      </section>
      
      
    </div>
  );
}

export default Projects;
