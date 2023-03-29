import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <span>L</span>
        <h3>Luca Fabbozzo Wed Developer</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/start">Start</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/curriculum">Curriculum</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
