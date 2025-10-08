import React from "react";
import './header.scss'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>

      <img src="../public/LOGO.png" alt="logo" />
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/Apropos">A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header



