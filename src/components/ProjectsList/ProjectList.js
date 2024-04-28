// ProjectList.js

import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'; 
import projectsData from '../../Projets.json';
import './ProjectList.scss'; 

const ProjectList = () => {
  return (
    <div className="project-list">
      {projectsData.map(project => (
        <ProjectCard
          key={project.id}
          id={project.id}
          cover={project.cover}
          coverTitle={project.coverTitle}
          explication={project.explication}
          imgDetail={project.imgDetail}
          altimgDetail={project.altimgDetail}
          tags={project.tags}
        />
      ))}
    </div>
  );
};

export default ProjectList;
