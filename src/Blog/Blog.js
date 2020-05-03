import React, { Component } from 'react';
import './Blog.css';

 export class Blog extends Component {
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
      <div className="blog_main-container">
      	<h1>
          BLOG 
        </h1>
        <div className="blog_color-box"></div>
        <p>Interested in doing a project together?</p>
        <p>Have a project on your mind?</p>
        <button className="blog_button_email">Email Me -> </button>
      </div>
  		)
  }

 }