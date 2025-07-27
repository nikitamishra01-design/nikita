
// src/pages/About.jsx
import React from 'react';
import './About.css'; // stylish CSS like Home.css

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>About GlowUp</h1>
          <p>
            GlowUp is your go-to online beauty store, offering premium skincare,
            makeup, and self-care essentials. Our mission is to make everyone feel
            confident and beautiful in their own skin.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Promise</h2>
        <div className="value-grid">
          <div className="value-card">
            <h3>Premium Products</h3>
            <p>We curate the best beauty brands that are safe and effective.</p>
          </div>
          <div className="value-card">
            <h3>Customer First</h3>
            <p>Your satisfaction and beauty journey is our top priority.</p>
          </div>
          <div className="value-card">
            <h3>Clean Beauty</h3>
            <p>Our products are cruelty-free, clean, and conscious.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
