// import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";

const About = () => {
  return (
    <div className='page'>
      <Header />
      <main>
        <div className='cover2'>
          <img src='./mountain-and-lake.png' alt='' />
        </div>
        <section className='about__section'>
          <Dropdown />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
