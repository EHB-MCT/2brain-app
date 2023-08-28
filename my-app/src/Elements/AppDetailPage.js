import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/AppDetailPage.css';
import project1Image from '../assets/projects/midjourney/2.png';
import project2Image from '../assets/projects/midjourney/0_1-10.png';
import project3Image from '../assets/projects/midjourney/0_1-6.png';
import project1Sub1 from '../assets/projects/midjourney/0_1-6.png';
import project1Sub2 from '../assets/projects/midjourney/0_1-6.png';
import project1Sub3 from '../assets/projects/midjourney/0_1-6.png';

const AppDetailPage = () => {
  const { id } = useParams();
  const [showFullScreenImage, setShowFullScreenImage] = useState(null);

  const appDetail = {
    id: id,
    name: 'MIDJOURNEY',
    description: 'Highligted works made by Midjourney users.',
  };

  const projects = [
    {
      id: 1,
      name: 'MAGAZINE COVER',
      mainImage: project1Image,
      description: 'I generated a magazine cover with Midjourney.',
      author: 'Andy Huizenga',
      prompt: 'Create a magazine cover',
      edition: '4th',
      subImages: [
        project1Sub1,
        project1Sub2,
        project1Sub3
      ]
    },
    {
      id: 2,
      name: 'ROBOT WOMAN',
      mainImage: project2Image,
      description: 'Created a human face with the body and brain of a robot.',
      author: 'Andy Huizenga',
      prompt: 'Generate a robot woman',
      edition: '3th',
      subImages: []
    },
    {
      id: 3,
      name: 'GIRL SURROUNDED BY TECHNOLOGY',
      mainImage: project3Image,
      description: 'Created a little girl of mixed origin surrounded by technology.',
      author: 'Andy Huizenga',
      prompt: 'Create a tech-savvy girl',
      edition: '4th',
      subImages: []
    },
    // ...additional projects
  ];

  const openFullScreen = (src) => {
    setShowFullScreenImage(src);
  };

  return (
    <div className="app-detail-page">
      <h1 className="app-detail-page-title">{appDetail.name}</h1>
      <p className="app-detail-page-description">{appDetail.description}</p>
      <a href="mailto:newworks@community2B.com?subject=New Work Submission" className="submit-button">
  <button className='send'>Submit yours</button>
</a>

      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              className="project-main-image"
              src={project.mainImage}
              alt={project.name}
              onClick={() => openFullScreen(project.mainImage)}
            />
            <div className="project-text">
              <h2 className="project-title">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-author">Author: {project.author}</p>
              <p className="project-prompt">Prompt: {project.prompt}</p>
              <p className="project-edition">Edition: {project.edition}</p>
            </div>
            <div className="thumbnail-container">
        {project.subImages.map((subImage, subIndex) => (
          <img 
            key={subIndex} 
            className="thumbnail-image" 
            src={subImage} 
            alt={`${project.name} thumbnail ${subIndex}`}
            onClick={() => window.open(subImage, "_blank")} 
          />
        ))}
      </div>
          </div>
        ))}
      </div>

      {showFullScreenImage && (
        <div className="fullscreen-image-container" onClick={() => setShowFullScreenImage(null)}>
          <img src={showFullScreenImage} alt="Fullscreen" />
        </div>
      )}
    </div>
  );
};

export default AppDetailPage;
