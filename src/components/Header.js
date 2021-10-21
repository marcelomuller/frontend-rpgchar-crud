import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink className="navlink" to="/">
            Create
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="chars">
            Show
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
