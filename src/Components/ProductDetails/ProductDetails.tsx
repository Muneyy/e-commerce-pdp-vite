/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import './ProductDetails.sass';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../Redux/app/hooks';
import { addToCart } from '../../Redux/features/cartSlice';
import showTwoDecimalPlaces from '../../HelperFunctions/showTwoDecimalPlaces';

interface ProductDetailsProps {
  company: string;
  title: string;
  description: string;
  price: number;
  discount: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  company,
  title,
  description,
  price,
  discount,
}) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useAppDispatch();

  function handleQuantityIncrease() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }
  function handleQuantityDecrease() {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  }

  function handleAddToCart() {
    if (quantity === 0) {
      return;
    }
    dispatch(addToCart({
      id: uuidv4(),
      company,
      title,
      description,
      price,
      discount,
      quantity,
    }));
  }

  const discountedPrice = price * discount;

  return (
    <div className="details-container">
      <h3 id="product-company">{company}</h3>
      <h1 id="product-title">{title}</h1>
      <p id="product-description">{description}</p>
      <div className="details-price-container">
        <div className="discounted-price-and-discount">
          <p id="discounted-price">
            $
            {showTwoDecimalPlaces(discountedPrice)}
          </p>
          <span>
            {discount * 100}
            %
          </span>
        </div>
        <p id="original-price">
          $
          {showTwoDecimalPlaces(price)}
        </p>
      </div>
      <div className="details-cart-quantity">
        <div className="details-quantity">
          <button
            onClick={handleQuantityDecrease}
            type="button"
            className="quantity-decrease"
            aria-label="decrease quantity"
          >
            <svg width={12} height={4} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" /></defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </button>
          <p>{quantity}</p>
          <button
            onClick={handleQuantityIncrease}
            type="button"
            className="quantity-decrease"
            aria-label="increase quantity"
          >
            <svg width={12} height={12} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" /></defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
            </svg>
          </button>
        </div>
        <div className="details-add-to-cart">
          <button
            onClick={handleAddToCart}
            type="button"
            className="add-to-cart-button"
            aria-label="add to cart"
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fillRule="nonzero" /></svg>
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
