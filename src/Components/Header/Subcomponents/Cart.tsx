import './Cart.sass';

export default function Cart() {
  return (
    <div className="cart-card">
      <div className="cart-header">
        <h2>Cart</h2>
      </div>
      <div className="cart-body">
        <p>
          Your cart is empty.
        </p>
      </div>
    </div>
  );
}
