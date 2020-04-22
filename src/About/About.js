import React, { Component } from 'react';
import './About.css';

 export class About extends Component {
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
      <div className="about_main-container" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        {this.state.isHovered ? 
        <section className="about_nonactive-container">
        <h1 className="about-title">ABOUT</h1>
        </section> :
        <section className="about_active-container">
          <h1 className="about-title">ABOUT</h1>
        </section>
      }
      </div>
      )
  }

 }