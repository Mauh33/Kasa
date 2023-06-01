import React from "react";
import Logo from "../assets/icons/Logo-footer.svg";

const Footer = () => {
  return (
    <footer className='footer'>
      <img className='logo-footer' src={Logo} alt='Logo de Kasa' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
