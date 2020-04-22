import React from 'react';
import './About.css';

export const About = () => {
  return (
    <section className="about_container">
      <section className="about_info-container">
        <h1 className="about_info-title">Hello.</h1>
        <h3 className="about_info-name">My name is, Jesse</h3>
        <h1 className="about_info-skills">SKILLS</h1>
        <p>React / React Native</p>
        <p>Redux</p>
        <p>JavaScript</p>
        <p>jQuery</p>
        <p>SCSS/CSS</p>
        <p>RestAPI</p>
        <p>Unit Testing</p>
        <p>Git & Github</p>
      </section>
      <section className="about_introduction-container">
    	  <h1 className="about_info-skills">introduction</h1>
        <h1 className="about_info-title">Creativity at the service of the user</h1>
    	  <p>Front-end software developer with an extensive background as a graphic designer. <br />
    	  Proficient in both front-end development languages like React, JavaScript, SCSS and, <br />
    	  also graphic design software including Adobe Creative Suite and inVision. Focused on <br />
    	  improving a user’s experience with a company or brand at all touchpoints.</p>
        <button className="about_button">Fint out more</button>
        <h1>Or find me @…</h1>
        <div className="about_social-container">
          <button>github</button>
          <button>github</button>
          <button>github</button>
          <button>github</button>
        </div>
      </section>	
    </section>
  	)
}