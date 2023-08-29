import React from 'react';
import '../css/AboutUsPage.css'; 
import Portret from '../assets/projects/midjourney/2.png';
import brain from '../assets/images/brain.png';

const AboutUsPage = () => {
  return (
    
    <div className="about-us-container">
        <h1 className="about-us-title">ABOUT US</h1>
      <p className="app-detail-page-description">Get to now us a better</p>

      <div className="about-us-cards">
      <div className="about-us-content">
        <img 
          src="https://www.w3schools.com/howto/img_avatar.png" 
          alt="Your Name" 
          className="about-us-image"
        />

     
        <div className="about-text">
     
        <h2 className="contact-header">ANDY HUIZNEGA</h2>
      <p className="contact-text">Andy.huizenga@student.ehb.be</p>
      <p >
         I'm the founder and creator of TWOBrain. From the concept, Ux design and engeniring I have been involved in every step of the way. 
      
        </p>

        
      </div>
      </div>
      <div className="about-us-content">
        <img 
          src={brain}
          alt="Your Name" 
          className="about-us-image"
        />

     
        <div className="about-text">
     
        <h2 className="contact-header">TWOBRAINS</h2>
      <p className="contact-text">2brains@managment.com</p>
      <p > TWOBrain has been created for my Final work. Being the last step of my bachelor in Multimedia & Creative technology at EHB. </p>
      </div>
      </div>
      </div>

  
      <div className="mission-container">
        <h2 className="mission-header">MISSION</h2>
        <p className="mission-text">
          The mission of TWOBrain is to make AI accessible to everyone. Helping them finding the right tools and information to get started and keeping them updated on the latest news and trends.
          To connect users their is also a community page provided where users can share their work and get inspired by others.
        </p>
      </div>

    
    </div>
  );
}

export default AboutUsPage;

