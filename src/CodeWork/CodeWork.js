import React, { Component } from 'react';
import netflix from '../Assets/Netflix.png';
import netflixdisplay from '../Assets/netflix_macbook.png';
import brewdisplay from '../Assets/brew_macbook.png';
import macbook from '../Assets/macbook.png';
import code from '../Assets/code.jpeg';
import './CodeWork.css';

export class CodeWork extends Component {
  constructor() {
  	super()
  }
  render() {
    const backgroundStyling = {
      background: `linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 65%)), url(${code}) no-repeat center top`,
      backgroundSize: 'cover',
    }
  	return(
  		<section className="codework_main_container">

  			<section className="codework_intro" style={backgroundStyling}>
          <h3 className="codework_header">Websites not only need to look good,<br/> but they also need to be effective.</h3>
          <p>Getting a quality website is not an expenses but rather an investment</p>
          <div className="codework_color-box"></div>
        </section>

        <div className="codework_intro-testi">"Best work ever"</div>

        <section className="codework_netflix_container">
          <div className="netflix_text-box">
              <img className="netflix_logo" src={netflix}/>
              <h1 className="netflix_logo-title">Netflix rebrand, <br/>- a UX/UI case study</h1>
              <p className="netflix_logo-info">A New rating system, tht allows easy judging.</p>
              <button className="codework_netflix_github">Find out more</button>
          </div>
            <img className="codework_netflix_computer" src={netflixdisplay}/>
        </section>

        <div className="codework_intro-testi">"Best work ever"</div>

        <section className="codework_brew_container">
          <div className="netflix_text-box">
            <h1 className="codework_brew_title">The BREW REVIEW</h1>
            <button className="codework_netflix_github">Find out more</button>
            <p>Behind every successful creative project is one dream_</p>
          </div>
          <img className="codework_netflix_computer" src={brewdisplay}/>
        </section>

        <div className="codework_intro-testi">"Best work ever"</div>

        <section className="codework_vrad_container">
          <h1 className="codework_brew_title">Denver Vacation Rental</h1>
          <button className="codework_vrad_github">Find out more</button>
          <img className="codework_netflix_computer" src={macbook}/>
        </section>

        <div className="codework_footer_container"></div>

  		</section>
  		)
  }
}

