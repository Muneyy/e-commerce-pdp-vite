// import reactLogo from './assets/react.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  const [productsArray, setProductsArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((json) => {
        setProductsArray(json.products);
        setIsLoaded(true);
      });
    // Fix this to instead store the data in Redux global state
  }, []);

  return (
    <>
      {/* <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React For Ecommerce-PDP</h1>
      <div className="card">
        <button type="submit" onClick={() => setCount((count) => count + 1)}>
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="sass-class">
        Hello
      </p> */}
      <Header />
      {isLoaded ? (
        productsArray.map((product) => {
          const {
            id, company, title, description, price, discount,
          } = product;
          return (
            <ProductDetails
              key={id}
              company={company}
              title={title}
              description={description}
              price={price}
              discount={discount}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}

    </>
  );
}

export default App;
