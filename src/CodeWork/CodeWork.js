import React, { Component } from 'react';
import netflix from '../Assets/Netflix.png';
import netflixlogo from '../Assets/netflix_n.png';
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
        <header className="codework_header_container">
          <div className="codework_header_home header_text">
            <h1 className="codework_header_p header_text">PORTFOLIO:</h1>
            <h1 className="codework_header_c header_text">CODING</h1>
          </div>
          <div className="codework_header_nav header_text">
            <h1 className="codework_header_p header_text">HOME</h1>
            <h1 className="codework_header_p header_text">DESIGN</h1>
            <h1 className="codework_header_p header_text">ABOUT</h1>
          </div>
        </header>
  			<section className="codework_intro" style={backgroundStyling}>
          <div className="codework_intro-textbox">
            <h3 className="codework_header">Websites not only need to look good,<br/> but they also need to be effective.</h3>
            <div className="codework_color-box"></div>
            <p className="codework_intro-para">Getting a quality website is not an expenses but rather an investment</p>
            <button className="codework_github-link">My Github Account</button>
          </div>
        </section>

        <div className="codework_intro-testi">“Getting a quality website is not an expenses but rather an investment.” <br/> -- Dr. Christopher Dayagdag</div>

        <section className="codework_netflix_container">
          <div className="netflix_text-box">
              <img className="netflix_logo" src={netflix}/>
              <h1 className="netflix_logo-title">Netflix rebrand, <br/>- a UX/UI case study</h1>
              <p className="netflix_logo-info">A New rating system, tht allows easy judging.</p>
              <button className="codework_netflix_github">Find out more</button>
          </div>
            <img className="codework_netflix_computer" src={netflixdisplay}/>
        </section>

        <div className="codework_intro-testi">“Let us take you into a deeper experience,<br/> make a moment a lasting conveyable memory.<br/> Let us help build your tribe.” <br/>-- Deep Immersion</div>

        <section className="codework_brew_container">
          <div className="netflix_text-box">
            <h1 className="codework_brew_title">The BREW REVIEW</h1>
            <button className="codework_netflix_github">Find out more</button>
            <p>Behind every successful creative project is one dream_</p>
          </div>
          <img className="codework_netflix_computer" src={brewdisplay}/>
        </section>

        <div className="codework_footer_container"></div>

  		</section>
  		)
  }
}

