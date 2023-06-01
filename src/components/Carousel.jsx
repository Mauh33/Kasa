import React, { useState } from "react";
import ArrowPrev from "../assets/icons/arrow_prev.png";
import ArrowNext from "../assets/icons/arrow_next.png";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPictures = pictures.length;
  const reversedPictures = pictures.reverse();
  const totalReversed = reversedPictures.length;
  console.log(totalReversed);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === totalPictures - 1 ? 0 : prevIndex + 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? totalPictures - 1 : prevIndex - 1
    );
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
          {<img className='carousel-arrow' src={ArrowPrev} alt='' />}
        </button>
        <button className='carousel-btn' onClick={goToNext}>
          {<img className='carousel-arrow' src={ArrowNext} alt='' />}
        </button>
        <div className='carousel-counter-bloc'>
          <p className='carousel-counter'>{`${
            currentIndex + 1
          }/${totalReversed}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
