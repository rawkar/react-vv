import React from 'react';
import { NavLink } from 'react-router-dom';
import '../src/styles/style.scss';
import Home from './assets/icons/Home';
import Linkedin from './assets/icons/Linkedin';
import Instagram from './assets/icons/Instagram';
import Facebook from './assets/icons/Facebook';

function Sidebar() {
  return (
    <div className="sidebar">
      <figure className="logo">
        <NavLink to="/">
          <img src="/src/assets/images/logo.png" alt="Logotyp" />
        </NavLink>
      </figure>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink  to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
    
              <Home/>
              <span>Start</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/Linkedin" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
 
          <Linkedin/>
          <span>LinkedIn</span>    
            </NavLink>

            
        
          </li>
          <li>
          <NavLink to="/Instagram" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
             <Instagram/>
              <span>Instagram</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Facebook" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              <Facebook/>
              <span>Facebook</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
