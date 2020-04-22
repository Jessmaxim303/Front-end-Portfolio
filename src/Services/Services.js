import React from 'react';
import './Services.css';
import { Code } from '../Code/Code.js';
import { Design } from '../Design/Design.js';
import { About } from '../About/About.js';

export const Services = () => {
	return (
   <section className="services_main-container">
   	<Code/>
   	<Design/>
   	<About/>
   </section>
		)
}