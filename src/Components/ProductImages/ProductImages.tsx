import React, { BaseSyntheticEvent, useState } from 'react';
import './style.scss';
import LargeImage1 from '@/assets/images/image-product-1.jpg';
import LargeImage2 from '@/assets/images/image-product-2.jpg';
import LargeImage3 from '@/assets/images/image-product-3.jpg';
import LargeImage4 from '@/assets/images/image-product-4.jpg';
import SmallImage1 from '@/assets/images/image-product-1-thumbnail.jpg';
import SmallImage2 from '@/assets/images/image-product-2-thumbnail.jpg';
import SmallImage3 from '@/assets/images/image-product-3-thumbnail.jpg';
import SmallImage4 from '@/assets/images/image-product-4-thumbnail.jpg';

export default function ProductImages() {
  const LargeImages = [LargeImage1, LargeImage2, LargeImage3, LargeImage4];
  const SmallImages = [SmallImage1, SmallImage2, SmallImage3, SmallImage4];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);

  const handlePrev = () => {
    setSelectedIndex((prevVal:number) => (prevVal !== 0 ? prevVal - 1 : LargeImages.length - 1));
  };

  const handleNext = () => {
    const ImagesLength = LargeImages.length - 1;
    setSelectedIndex((prevVal) => (prevVal !== ImagesLength ? prevVal + 1 : 0));
  };

  const renderSmallImages = (
    <div className="smallImagesContainer">
      {SmallImages.map((image, index) => (
        <div
          key={image}
          role="button"
          tabIndex={index}
          onClick={() => setSelectedIndex(index)}
          onKeyDown={() => setSelectedIndex(index)}
        >
          <img
            className={`smallImages ${selectedIndex === index ? ' selected' : ''} `}
            src={image}
            alt="Small Img"
          />
        </div>
      ))}
    </div>
  );
  const renderDesktopImages = (
    <div>
      <div
        onClick={() => setShowLightBox(true)}
        onKeyDown={() => setShowLightBox(true)}
        role="button"
        tabIndex={0}
      >
        <img src={LargeImages[selectedIndex]} alt="Large Img" className="largeImage" />
      </div>
      {renderSmallImages}
    </div>
  );
  const renderLightBox = showLightBox && (
  <div
    className="lightBoxContainer"
    onClick={() => setShowLightBox(false)}
    onKeyDown={() => setShowLightBox(false)}
    role="button"
    tabIndex={0}
  >
    <div
      className="lightBox"
      onClick={(e: Event | BaseSyntheticEvent) => e.stopPropagation()}
      onKeyDown={(e: Event | BaseSyntheticEvent) => e.stopPropagation()}
      role="button"
      tabIndex={0}
    >
      <div>
        <img src={LargeImages[selectedIndex]} alt="Large Img" className="largeImageLightbox" />
        {renderSmallImages}
        <button
          className="closeIcon"
          onClick={() => setShowLightBox(false)}
          type="button"
          aria-label="Close"
        >
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" />
          </svg>
        </button>

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
      </div>
    </div>
  </div>
  );

  return (
    <div>
      {renderLightBox}
      <div className="productImagesContainer">
        {renderDesktopImages}
      </div>
    </div>
  );
}
