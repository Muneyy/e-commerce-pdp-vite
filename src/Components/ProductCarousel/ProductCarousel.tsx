import React, { useState } from 'react';
import './style.scss';

import LargeImage1 from '@/assets/images/image-product-1.jpg';
import LargeImage2 from '@/assets/images/image-product-2.jpg';
import LargeImage3 from '@/assets/images/image-product-3.jpg';
import LargeImage4 from '@/assets/images/image-product-4.jpg';

const carouselImages = [LargeImage1, LargeImage2, LargeImage3, LargeImage4];

const carouselImages = [LargeImage1, LargeImage2, LargeImage3, LargeImage4];

export default function ProductCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = (increment:number) => {
    setSelectedIndex((prevIndex) => {
      const newIndex = (prevIndex + increment + carouselImages.length) % carouselImages.length;
      return newIndex;
    });
  };

  const renderNavigationButton = (label:string, increment:number) => (
    <button
      className={`${label.toLowerCase()}Icon`}
      onClick={() => handleIndexChange(increment)}
      type="button"
      aria-label={label}
    >
      <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d={increment !== 1 ? 'M11 1 3 9l8 8' : 'M2 1 10 9l-8 8'}
          stroke="#1D2026"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );

  const renderCarousel = (
    <div className="carouselContainer">
      {renderNavigationButton('Prev', -1)}
      <img src={carouselImages[selectedIndex]} alt="Large Img" className="carouselImages" />
      {renderNavigationButton('Next', 1)}
    </div>
  );

  return <div>{renderCarousel}</div>;
}
