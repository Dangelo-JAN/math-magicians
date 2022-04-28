import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li id="logo"><Link className="links" to="/">Math Magicians</Link></li>
      <li><NavLink className="links" activeClassName="active-link" to="/quote" exact>Quote</NavLink></li>
      <li><NavLink className="links" activeClassName="active-link" to="/calculator" exact>Calculator</NavLink></li>
      <li><NavLink className="links" activeClassName="active-link" to="/" exact>Home</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
