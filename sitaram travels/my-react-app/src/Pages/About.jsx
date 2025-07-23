
import React from "react";
import "./Common.css";
import "./about.css"; // add this

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          At SITARAM TRAVELS, we believe in making your journey safe, comfortable, and memorable.
          With a wide network of routes and experienced staff, we aim to deliver the best travel experience across India.
        </p>

        <div className="about-cards">
          <div className="card">
            <h2>Safe Travel</h2>
            <p>Our cars are well-maintained and safety is our top priority.</p>
          </div>
          <div className="card">
            <h2>Experienced Drivers</h2>
            <p>We hire only licensed and highly trained professionals.</p>
          </div>
          <div className="card">
            <h2>Comfort & Cleanliness</h2>
            <p>Clean buses with comfortable seating for a pleasant ride.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;