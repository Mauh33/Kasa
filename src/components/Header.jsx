import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
        <img className='logo' src={Logo} alt='Logo de Kasa' />
      </div>
      <div className='navigation'>
        <ul>
          <NavLink to='/' activeclassname='active'>
            <li>
              A
              <span className={`${windowWidth >= 1200 ? "minify" : " "}`}>
                CCUEIL
              </span>
            </li>
          </NavLink>
          <NavLink to='/about' activeclassname='active'>
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
        </ul>
      </div>
    </header>
  );
};

export default Header;
