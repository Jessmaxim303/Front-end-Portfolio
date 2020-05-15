import React from 'react';
import linkedin from '../Assets/linkedin.png';
import github from '../Assets/github.png';
import './Connect.css';

export const Connect = () => {
	const githubstyle = {
      background: `linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0)), url(${github}) no-repeat center top`,
      backgroundSize: 'cover',
    }
	return (
    <section className="connect_main-container">
    	<h1 className="connect_main-title">CONNECT</h1>
    	<section className="connect_logo-container">
            <img className="github_logo" src={github}/>
            <img className="linkedin_logo" src={linkedin}/>
    	</section>
    	<div className="connect_footer"></div>
    </section>
		)
}

