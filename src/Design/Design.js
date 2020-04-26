import React, { Component } from 'react';
import design from '../Assets/adobe3.jpg';
import './Design.css';

 export class Design extends Component {
	constructor() {
		super();
		this.state = {
			isHover: false
		}
		this.toggleHover = this.toggleHover.bind(this);
	}

  toggleHover(e) {
    e.preventDefault();
    this.setState(prevState => ({isHovered: !prevState.isHovered}));
  }

  render() {
    const backgroundStyling = {
      background: `linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0)), url(${design}) no-repeat center top`,
      backgroundSize: 'cover',
    }
  	return (
      <div className="design_main-container" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
      	{this.state.isHovered ? 
        <section className="design_nonactive-container">
        <h1 className="design-title">DESIGN</h1>
        </section> :
        <section className="design_active-container" style={backgroundStyling}>
          <h1 className="design-title">DESIGN</h1>
        </section>
      }
      </div>
  		)
  }

 }