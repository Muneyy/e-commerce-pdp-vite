import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ProductImages from './Components/ProductImages/ProductImages';
import ProductCarousel from './Components/ProductCarousel/ProductCarousel';
import '@/assets/styles/globals.scss';
import useMediaQuery from './hooks/useMedia';

function App() {
  const [productsArray, setProductsArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobileView = useMediaQuery(780);
  useEffect(() => {
    // fetch products from mirageJS API
    fetch('/api/products')
      .then((res) => res.json())
      .then((json) => {
        setProductsArray(json.products);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div>
      <Header />
      {isMobileView && (
      <ProductCarousel />
      )}
      {isLoaded ? (
        productsArray.map((product) => {
          const {
            id, company, title, description, price, discount,
          } = product;
          return (
            <div className="wrapper" key={id}>
              {!isMobileView && (
              <ProductImages />
              )}
              <ProductDetails
                key={id}
                id={id}
                company={company}
                title={title}
                description={description}
                price={price}
                discount={discount}
              />
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>

  );
}

export default App;
