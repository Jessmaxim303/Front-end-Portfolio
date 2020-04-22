import React, { Component } from 'react';
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
  	return (
      <div className="design_main-container" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
      	{this.state.isHovered ? 
        <section className="design_nonactive-container">
        <h1 className="design-title">DESIGN</h1>
        </section> :
        <section className="design_active-container">
          <h1 className="design-title">DESIGN</h1>
        </section>
      }
      </div>
  		)
  }

 }