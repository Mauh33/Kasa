import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { link } from "react-router-dom";
import Logo from "../assets/icons/logo.svg";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (windowWidth >= 1200) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [windowWidth]);

  return (
    <header className='header'>
      <div className='logo-bloc'>
        <ul>
          <NavLink to='/'>
            <img className='logo' src={Logo} alt='Logo de Kasa' />
          </NavLink>
        </ul>
      </div>
      <div className='navigation'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <li>
            A
            <span className={`${windowWidth >= 1200 ? "minify" : " "}`}>
              CCUEIL
            </span>
          </li>
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <li>
            A
            <span
              className={`letter-space${
                windowWidth >= 1200 ? " minify2" : " "
              }`}
            >
              PROPOS
            </span>{" "}
          </li>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

/*

classNameActive={({ isActive, isPending }) =>
              isPending ? "unselected" : isActive ? "active-link" : ""
            }

activeClassName='active-link'
className={isActive => (!isActive ? " unselected" : "active-link")}
className={isActive => `nav-link${!isActive ? " unselected" : ""}`} */
