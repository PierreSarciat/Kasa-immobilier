import React from "react";
import './header.scss'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>

      <img src="../public/LOGO.png" alt="logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/Apropos">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header



