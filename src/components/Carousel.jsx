import React, { useEffect, useState } from "react";
import ArrowPrev from "../assets/icons/arrow_prev.png";
import ArrowNext from "../assets/icons/arrow_next.png";

const Carousel = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [counterContent, setCounterContent] = useState("");
  const { pictures } = props;
  const totalPicture = pictures.length;

  useEffect(() => {
    if (isFirstRender) {
      setCurrentIndex(0);
      setCounterContent(`1/${totalPicture}`);
      setIsFirstRender(false);
    } else {
      setCounterContent(`${totalPicture - currentIndex}/${totalPicture}`);
    }
  }, [currentIndex, isFirstRender, totalPicture]);

  const reversedPictures = pictures.slice().reverse();

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0) {
        return totalPicture - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === totalPicture - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <div className='carousel-bloc'>
      <div className='carousel'>
        <img
          className='carousel-picture'
          src={reversedPictures[currentIndex]}
          alt=''
        />
        <button className='carousel-btn' onClick={goToPrevious}>
          <img className='carousel-arrow' src={ArrowPrev} alt='' />
        </button>
        <button className='carousel-btn' onClick={goToNext}>
          <img className='carousel-arrow' src={ArrowNext} alt='' />
        </button>
        <div className='carousel-counter-bloc'>
          <p className='carousel-counter'>{counterContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
