import React, { Component } from 'react';
import './Code.css';

 export class Code extends Component {
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
      <div className="code_main-container" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
      	{this.state.isHovered ? 
        <section className="nonactive_container">
        <h1 className="code-title">CODE</h1>
        </section> :
        <section className="active_container">
          <h1 className="code-title">CODE</h1>
        </section>
      }
      </div>
  		)
  }

 }