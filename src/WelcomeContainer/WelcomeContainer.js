import React, { Component } from 'react';
import './WelcomeContainer.css';

export const WelcomeContainer = () => {
		return(
      <section className="welcome_container">
        <section className="left">
          <section>
            <h1>JESSE</h1>
            <h1>MAXIM</h1>
            <button>my story</button>
          </section>  
        </section>
        <section className="right">
          <p>- Introduction</p>
          <h1>Software Developer and </h1>
          <h1>Graphic Designer, based in</h1>
          <h1>Denver</h1>
          <p>Focused on improving a user’s experience with a company</p>
          <p>or brand at all touchpoints.</p>
        </section>
      </section>
			)
}