import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://thumbs.dreamstime.com/b/minimalist-ngo-logo-design-featuring-people-tree-globe-clean-promoting-social-justice-321640919.jpg"
          alt="NGO Logo"
          className="logo-img"
        />
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
