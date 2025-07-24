
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="logo">☕ Coffee Bliss</h1>
        <nav>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="hero">
        <h2>Your Daily Dose of Bliss</h2>
        <p>Crafted with love and roasted to perfection.</p>
        <button>Order Now</button>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>
          Welcome to Coffee Bliss – your cozy destination for handcrafted coffees.
          We source the finest beans and brew them with perfection.
        </p>
      </section>

      <section id="menu">
        <h2>Our Menu</h2>
        <div className="menu-items">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1520209268520-7f95f1b5c04c?auto=format&fit=crop&w=800&q=80"
              alt="Classic Espresso"
            />
            <h3>Classic Espresso</h3>
            <p>Strong, bold, and flavorful</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
              alt="Mocha Cream"
            />
            <h3>Mocha Cream</h3>
            <p>Chocolatey, creamy & smooth delight</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
              alt="Vanilla Cappuccino"
            />
            <h3>Vanilla Cappuccino</h3>
            <p>Sweet foam with vanilla twist</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 Coffee Bliss. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
