// import reactLogo from './assets/react.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ProductImages from './Components/ProductImages/ProductImages';
import ProductCarousel from './Components/ProductCarousel/ProductCarousel';
import '@/assets/styles/globals.scss';
import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import './App.css';
import Header from './Components/Header/Header';

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
    <div className="wrapper">
      <ProductCarousel />
      <ProductImages />
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
    </div>

  );
}

export default App;
