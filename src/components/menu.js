import React from 'react';
import { Link } from "gatsby"
import "./menu.css"

const Menu = () => {
  return(
    <nav className="menu">
      <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
      <label className="menu-open-button" htmlFor="menu-open">
        <span className="lines line-1"/>
        <span className="lines line-2"/>
        <span className="lines line-3"/>
      </label>

      <Link to="/" className="menu-item purple" title="About">
        <i className="fas fa-female"/>
      </Link>
      <Link to="/stories" className="menu-item blue" title="Stories">
        <i className="fas fa-book"/>
      </Link>
      <Link to="/projects" className="menu-item lightblue" title="Projects">
        <i className="fa fa-diamond"/>
      </Link>
      <Link to="/whoami" className="menu-item orange" title="Work">
        <i className="fa fa-star"/>
      </Link>
      <Link to="/contact" className="menu-item green" title="Contact">
        <i className="fa fa-coffee"/>
      </Link>
      <Link to="/photos" className="menu-item red" title="Pictures">
        <i className="fa fa-images"/>
      </Link>
    </nav>
  );
}

export default Menu
