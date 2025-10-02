import React from "react";
import './header.scss'

const Header = () => {
  return (
    <header>


            <img src="../public/LOGO.png" alt="logo"/>
            <nav>
                <ul id="liens">
                    <li ><a href="">Accueil</a></li>
                    <li><a href="">A propos</a></li>
                </ul>
            </nav>
        </header>
  );
};

export default Header