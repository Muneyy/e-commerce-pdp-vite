import React, { useState } from 'react';
import './style.scss';

import LargeImage1 from '@/assets/images/image-product-1.jpg';
import LargeImage2 from '@/assets/images/image-product-2.jpg';
import LargeImage3 from '@/assets/images/image-product-3.jpg';
import LargeImage4 from '@/assets/images/image-product-4.jpg';
import SmallImage1 from '@/assets/images/image-product-1-thumbnail.jpg';
import SmallImage2 from '@/assets/images/image-product-2-thumbnail.jpg';
import SmallImage3 from '@/assets/images/image-product-3-thumbnail.jpg';
import SmallImage4 from '@/assets/images/image-product-4-thumbnail.jpg';

const LargeImages = [LargeImage1, LargeImage2, LargeImage3, LargeImage4];
const SmallImages = [SmallImage1, SmallImage2, SmallImage3, SmallImage4];

export default function ProductImages() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index:number) => {
    setSelectedIndex(index);
  };

  const renderSmallImages = (
    <div className="smallImagesContainer">
      {SmallImages.map((image, index) => (
        <div
          key={image}
          role="button"
          tabIndex={index}
          onClick={() => handleImageClick(index)}
          onKeyDown={() => handleImageClick(index)}
        >
          <img
            className={`smallImages ${selectedIndex === index ? ' selected' : ''}`}
            src={image}
            alt={`Small Img ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );

  const renderDesktopImages = (
    <div>
      <img src={LargeImages[selectedIndex]} alt={`Large Img ${selectedIndex + 1}`} className="largeImage" />
      {renderSmallImages}
    </div>
  );

  return (
    <div>{renderDesktopImages}</div>
  );
}
