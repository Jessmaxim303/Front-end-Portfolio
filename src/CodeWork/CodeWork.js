import React, { Component } from 'react';
import netflix from '../Assets/Netflix.png';
import macbook from '../Assets/macbook.png';
import './CodeWork.css';

export class CodeWork extends Component {
  constructor() {
  	super()
  }
  render() {
  	return(
  		<section className="codework_main_container">

  			<section className="codework_intro">
          <h3 className="codework_header">Websites not only need to look good,<br/> but they also need to be effective.</h3>
        </section>

        <div className="codework_intro-testi">"Best work ever"</div>

        <section className="codework_netflix_container">
          <div className="netflix_text-box">
            <img className="netflix_logo" src={netflix}/>
            <h1 className="netflix_logo-title">Netflix rebrand, <br/>- a UX/UI case study</h1>
            <p className="netflix_logo-info">A New rating system, tht allows easy judging.</p>
            <button></button>
          </div>
            <img className="codework_netflix_computer" src={macbook}/>
        </section>

        <div className="codework_intro-testi">"Best work ever"</div>

        <section className="codework_brew_container">
          <h1 className="codework_brew_title">The BREW REVIEW</h1>
        </section>

        <div className="codework_intro-testi">"Best work ever"</div>

        <section className="codework_vrad_container">
          <h1 className="codework_brew_title">Denver Vacation Rental</h1>
        </section>

        <div className="codework_intro-testi">"Best work ever"</div>

        <div className="codework_footer_container"></div>

  		</section>
  		)
  }
}

