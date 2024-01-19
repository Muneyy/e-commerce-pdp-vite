// import reactLogo from './assets/react.svg';
// import './App.css';
import { useEffect } from 'react';
import Header from './Components/Header/Header';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import createMirageAPI from './MirageJS/mirageServer';

function App() {
  useEffect(() => {
    createMirageAPI();
    fetch('/api/products')
      .then((res) => res.json())
      .then((json) => console.log(json));
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
      <ProductDetails />
    </>
  );
}

export default App;
