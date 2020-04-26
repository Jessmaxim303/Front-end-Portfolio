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
            // <p className="welcome_intro_motto">Creativity at the service of the user</p>
		return(
      <section className="welcome_container">
        <section className="left" style={backgroundStyling}>
          <section className="welcome_intro_component">
            <h1 className="welcome_intro_name">JESSE MAXIM</h1>
          </section>  
        </section>
        <section className="right" style={coverStyling}>
          <section className="welcome_nav_component">
            <h3 className="welcome_nav">about</h3>
            <h3 className="welcome_nav">works</h3>
            <h3 className="welcome_nav">contact</h3>
          </section>
          <section className="welcome_body_component">
            <h1 className="welcome_body_title">Software Developer and
            <br />
            Graphic Designer, 
            <br />based in
            Denver</h1>
            <p className="welcome_body_subtitle">Focused on improving a user’s experience with a company<br />
            or brand at all touchpoints.</p>
          </section>
        </section>
      </section>
			)
}