import React, { Component } from 'react';
import cover from '../Assets/cover_dev.jpg';
import sitemap from '../Assets/cover.jpg';
import './WelcomeContainer.css';

export const WelcomeContainer = () => {
  const backgroundStyling = {
      background: `linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0)), url(${cover}) no-repeat center top`,
      backgroundSize: 'cover',
    }

    const coverStyling = {
      background: `url(${sitemap})`,
      backgroundSize: 'cover',
    }
    
		return(
      <section className="welcome_container" style={backgroundStyling}>

          <header className="welcome_header_component">
            <h1 className="welcome_header_name">PORTFOLIO: HOME</h1>
            <h3 className="welcome_header_name">CODE</h3>
            <h3 className="welcome_header_name">DESIGN</h3>
            <h3 className="welcome_header_name">ABOUT</h3>
          </header>
          <section className="welcome_body_component">
            <h1 className="welcome_intro_name">JESSE MAXIM</h1>
            <h1 className="welcome_body_title">Software Developer <br /> Graphic Designer <br />based in Denver</h1>
            <div className="welcome_button_container">
              <button className="welcome_button_cv welcome_button">Download CV</button>
              <button className="welcome_button_contact welcome_button">Contact</button>
            </div>
          </section>
      </section>
			)
}