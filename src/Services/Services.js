import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Services.css';
import { Code } from '../Code/Code.js';
import { Design } from '../Design/Design.js';
import { About } from '../About/About.js';
import { Link } from "react-router-dom";

export const Services = () => {
	return (
   <section className="services_main-container">
     <Link className="services_code-link" to={{ pathname: `/code` }}>
       <Code />
     </Link>
     <Link className="services_code-link" to={{ pathname: `/design` }}>
       <Design />
     </Link>
     <Link className="services_code-link" to={{ pathname: `/about` }}>  
       <About />
     </Link>
   </section>
		)
}