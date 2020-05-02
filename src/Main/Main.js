import React from 'react';
import './Main.css';
import { Bio } from '../Bio/Bio.js';
import { Projects } from '../Projects/Projects.js';
import { WelcomeContainer } from '../WelcomeContainer/WelcomeContainer.js';
import { Services } from '../Services/Services.js';
import { Blog } from '../Blog/Blog.js';
import { Connect } from '../Connect/Connect.js';

export const Main = () => {
	return (
		<section className="main_section-container">
      <WelcomeContainer/>
      <Bio/>
      <Services/>
      <Blog/>
      <Connect/>
    </section>
      )
}