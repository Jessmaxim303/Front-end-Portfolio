import React from 'react';
import './Bio.css';

export const Bio = () => {
	return (
    <section className="bio_container">
      <section className="bio_left-container">
        <h1>MY EXPERIENCE</h1>
        <div className="bio_color-box"></div>
        <h1 className="welcome_intro_motto">Creativity at the service of the user</h1>
        <p>If you’d like to see more details <br/>about my work experience, <br/>please visit my Linkedin</p>
        <h3>linkedIn</h3>
      </section>
      <section className="bio_right-container">
        <h1 className="welcome_intro_motto">Believe in the power of interaction</h1>
        <p>Beautifully designed responsive website with engaging user experience<br/>
is the most powerful tool for brand and business build trust and strengthen the<br/>
relationship with their audiences.</p>

        <section className="bio_years-container">

          <div className="bio_years">
            <h1 className="bio_years-title">1.5</h1>
            <p>Years of <br/> code <br/>Experience</p>
          </div>

          <div className="bio_years">
            <h1 className="bio_years-title">9</h1>
            <p>Years of <br/> design <br/>Experience</p>
          </div>

        </section>

      </section>
    </section>
		)
}