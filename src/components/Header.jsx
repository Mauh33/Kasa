import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-bloc'>
        <img className='logo' src='./LOGO.svg' alt='Logo de Kasa' />
      </div>
      <div className='navigation'>
        <ul>
          <NavLink to='/' activeclassname='active'>
            <li>ACCUEIL</li>
          </NavLink>
          <NavLink to='/about' activeclassname='active'>
            <li>A PROPOS</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
