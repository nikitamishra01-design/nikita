
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome, FaInfoCircle, FaConciergeBell, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo"> SITARAM TRAVELS</h2>
      <div className="nav-links">
        <Link to="/"><FaHome /> Home</Link>
        <Link to="/about"><FaInfoCircle /> About</Link>
        <Link to="/services"><FaConciergeBell /> Services</Link>
        <Link to="/contact"><FaEnvelope /> Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
