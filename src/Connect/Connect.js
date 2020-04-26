import React from 'react';
import netflix from '../Assets/Netflix.png';
import github from '../Assets/github.png';
import './Connect.css';

export const Connect = () => {
	const githubstyle = {
      background: `linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0)), url(${github}) no-repeat center top`,
      backgroundSize: 'cover',
    }
	return (
    <section className="connect_main-container">
    	<h1>CONNECT</h1>
    	<section>
    		<div style={githubstyle}></div>
    		<div></div>
    	</section>
    	<div className="connect_footer"></div>
    </section>
		)
}

