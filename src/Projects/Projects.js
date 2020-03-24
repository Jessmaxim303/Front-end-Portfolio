import React from 'react';
import netflix from '../Assets/Netflix.png';
import './Projects.css';

export const Projects = () => {
	return (
    <section className="projects_container">
      <section className="projects_into-container">- intro
        <p>project details
        </p>
      </section>
      <section className="beer_project">
        <h1 className="project_brand-title">the BEER REVIEW</h1>
        <div className="project_color-box"></div>
        <p className="project_info-para">An application to track feedback and reviews for almost every brewery in the country. 
          <br /> The app fetches the data from an API and saves the users data locally using both React and Redux. 
          <br /> Emphasizes testing to ensure to application behaves as expected.
        </p>  
        <button className="project_info-button">find out more</button>
      </section>
    	<section className="netflix_project">
          <img className="netflix_logo" src={netflix}/>
          <h3>2020 Redesign and feature install</h3>
          <p>Netflix is a subscription-based film and television program rental service that offers media to subscribers via Internet streaming</p>
          <button className="netflix_button">find out more</button>
        </section>
    	<section className="airbnb_project">Airbnb new feature
          <button className="airbnb_button">find out more</button>
        </section>
    </section>
		)
}