import Header from "../components/Header";
import GalleryApartments from "../components/GalleryApartments";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className='page'>
      <Header />
      <main className='main-home'>
        <div className='cover'>
          <h1>Chez vous, partout et ailleurs</h1>
          <div>
            <img src='./cliffs-and-sea.png' alt='Couverture du site Kasa' />
          </div>
        </div>
        <GalleryApartments />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
