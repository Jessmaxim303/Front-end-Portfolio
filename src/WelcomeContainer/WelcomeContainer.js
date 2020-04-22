import React, { Component } from 'react';
import './WelcomeContainer.css';

export const WelcomeContainer = () => {
		return(
      <section className="welcome_container">
        <section className="left">
          <section className="welcome_intro_component">
            <h1 className="welcome_intro_name">JESSE MAXIM</h1>
            <p className="welcome_intro_motto">Creativity at the service of the user</p>
          </section>  
        </section>
        <section className="right">
          <section className="welcome_nav_component">
            <h3 className="welcome_nav">about</h3>
            <h3 className="welcome_nav">works</h3>
            <h3 className="welcome_nav">contact</h3>
          </section>
          <section className="welcome_body_component">
            <h1 className="welcome_body_title">Software Developer and<br />
            Graphic Designer, based in<br />
            Denver</h1>
            <p>Focused on improving a user’s experience with a company<br />
            or brand at all touchpoints.</p>
            <button className="welcome_story-button">my story -> </button>
          </section>
        </section>
      </section>
			)
}