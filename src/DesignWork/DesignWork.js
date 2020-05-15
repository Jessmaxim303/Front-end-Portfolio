import React, { Component } from 'react';
import './DesignWork.css';

export class DesignWork extends Component {
  constructor() {
  	super()
  }
  render() {
  	return(
  		<section>
  			
        <section className="designwork_intro">
          <h3 className="designwork_header">Websites not only need to look good,<br/> but they also need to be effective.</h3>
        </section>

        <div className="designwork_intro-testi">"Best work ever"</div>

        <section className="designwork_first_container">
          
        </section>

        <div className="codework_intro-testi">"Best work ever"</div>

        <section className="codework_brew_container">
          
        </section>

        <div className="codework_intro-testi">"Best work ever"</div>

        <section className="codework_vrad_container">

        </section>

        <div className="codework_footer_container"></div>

  		</section>
  		)
  }
}