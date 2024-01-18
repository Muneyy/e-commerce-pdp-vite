import thumbnailImage from './image-product-1-thumbnail.jpg';
import './CartItem.sass';

const sampleCartItem = {
  id: 1,
  name: 'Fall Limited Edition Sneakers',
  price: 125.00,
  quantity: 3,
  thumbnailImage,
};

export default function CartItem() {
  return (
    <div className="cart-item">
      <img src={thumbnailImage} alt="Cart item" />
      <div className="cart-item-details-and-delete">
        <div className="cart-item-details">
          {/* replace text values here later with actual
            attributes from API call */}
          <p>{sampleCartItem.name}</p>
          <p>
            $125.00 x 3
            {' '}
            <span className="total-amount">$375.00</span>
          </p>
        </div>
        <button type="submit" aria-label="delete item fron cart">
          <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" /></defs>
            <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
          </svg>
        </button>
      </div>
    </div>
  );
}
