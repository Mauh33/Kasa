import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import ErrorImg from "../assets/icons/404.png";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <main>
        <div className='error-bloc'>
          <div className='error-number'>
            <img src={ErrorImg} alt='404 error' />
          </div>
          <div className='error-explanation'>
            <p>Oups! La page que vous demandez n'existe pas.</p>
          </div>
          <NavLink to='/' activeclassname='active'>
            <li className='error-li'>Retourner sur la page d'accueil</li>
          </NavLink>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
