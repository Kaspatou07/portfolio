import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.scss';

const ProjectCard = ({ id, cover, coverTitle, explication }) => {
  const fileUrl = `${cover}`;

  
  return (
    <div className="project-card">
      <Link to={`/projet/${id}`}>
        <img className="project-image" src={fileUrl} alt={coverTitle} />
        <div className="project-content">
          <h3 className="project-title">{coverTitle}</h3>
          <p className="project-description">{explication}</p>
          <div className="tags-container">
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
