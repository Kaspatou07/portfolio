// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss'

function Navbar() {
  return (
    <nav>
      <ul className="nav-link">
        <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/projects" activeclassname="active">Projets</NavLink></li>
        <li><NavLink to="/Apropos" activeclassname="active">A propos</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;

