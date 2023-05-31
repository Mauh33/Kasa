import React, { useState, useEffect } from "react";
import ArrowPrev from "../assets/icons/arrow_prev.png";
import ArrowNext from "../assets/icons/arrow_next.png";

const Carousel = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  /*  const [currentImage, setCurrentImage] = useState(1); */

  const { pictures } = props;

  /*   useEffect(() => {
    setCurrentImage(currentIndex + 1);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0) {
        return pictures.length - 1;
      } else if (pictures.) {
        currentImage + 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === pictures.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };
 */

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0) {
        return pictures.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === pictures.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    const currentImage = currentIndex + 1;
    // Mettre à jour currentImage dans la balise p "carousel-counter"
    document.querySelector(
      ".carousel-counter"
    ).innerText = `${currentImage}/${pictures.length}`;
  }, [currentIndex, pictures.length]);

  return (
    <div className='carousel-bloc'>
      <div className='carousel'>
        <img className='carousel-picture' src={pictures[currentIndex]} alt='' />
        <button className='carousel-btn' onClick={goToPrevious}>
          <img className='carousel-arrow' src={ArrowPrev} alt='' />
        </button>
        <button className='carousel-btn' onClick={goToNext}>
          <img className='carousel-arrow' src={ArrowNext} alt='' />
        </button>
        <div className='carousel-counter-bloc'>
          <p className='carousel-counter'>1/{pictures.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
