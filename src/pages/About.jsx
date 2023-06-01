import Header from "../components/Header";
import Footer from "../components/Footer";
import ConditionsData from "../datas/conditionsData";
import Dropdown from "../components/Dropdown";

const About = () => {
  return (
    <div className='page'>
      <Header />
      <main className='main-about'>
        <div className='cover2'>
          <img src='./mountain-and-lake.png' alt='' />
        </div>
        <section className='about__section'>
          <Dropdown data={ConditionsData} showValue={true} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
