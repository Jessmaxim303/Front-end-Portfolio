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
        <div className="blog_title-box"> 
      	  <h1 className="blog_main-title">
            BLOG 
          </h1>
        <div className="blog_color-box"></div>
          <p>Have a project on your mind?</p>
        </div>
        <section className="blog_inner-container">
        <div className="blog_email-box">
          <input className="blog_input" placeholder="ENTER YOUR EMAIL"/>
          <button className="blog_button_email">SUBMIT </button>
        </div>
        </section>
      </div>
  		)
  }

 }