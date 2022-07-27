import React from 'react';
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer-cols">
        <div className="footer-row">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>
        <div className="footer-row">
          <a href="https://github.com/kurtisgrant/" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/kurtis-grant/" target="_blank">LinkedIn</a>
        </div>
      </div>
      <div className="footer-end">Website designed by Kurtis Grant ©2022</div>
    </div>
  );
}

export default Footer;