import React, { Component } from 'react';
import about from '../Assets/about.jpg';
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
    const backgroundStyling = {
      background: `linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0)), url(${about}) no-repeat center top`,
      backgroundSize: 'cover',
    }
    return (
      <div className="about_main-container" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        {this.state.isHovered ? 
        <section className="about_nonactive-container">
        <h1 className="about-title">ABOUT</h1>
        </section> :
        <section className="about_active-container" style={backgroundStyling}>
          <h1 className="about-title">ABOUT</h1>
        </section>
      }
      </div>
      )
  }

 }