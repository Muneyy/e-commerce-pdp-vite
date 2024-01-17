import React, { useState } from 'react';

import LargeImage1 from '@/assets/images/image-product-1.jpg';
import LargeImage2 from '@/assets/images/image-product-2.jpg';
import LargeImage3 from '@/assets/images/image-product-3.jpg';
import LargeImage4 from '@/assets/images/image-product-4.jpg';
import './style.scss';
import useMediaQuery from '@/Hooks/useMedia.tsx';

export default function ProductCarousel() {
  const carouselImages = [LargeImage1, LargeImage2, LargeImage3, LargeImage4];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useMediaQuery(375);

  const handlePrev = () => {
    setSelectedIndex((prevVal:number) => (prevVal !== 0 ? prevVal - 1 : carouselImages.length - 1));
  };

  const handleNext = () => {
    const ImagesLength = carouselImages.length - 1;
    setSelectedIndex((prevVal) => (prevVal !== ImagesLength ? prevVal + 1 : 0));
  };

  const renderCarousel = (
    <div className="carouselContainer">
      <button
        className="nextIcon"
        onClick={() => handleNext()}
        type="button"
        aria-label="Next"
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
      </button>
      <button
        className="prevIcon"
        onClick={() => handlePrev()}
        type="button"
        aria-label="Prev"
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
      </button>
      <img src={carouselImages[selectedIndex]} alt="Large Img" className="carouselImages" />
    </div>
  );
  return (
    <div>
      { isMobile && renderCarousel}
    </div>
  );
}
