import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import './App.css';
import './testSass.sass';
import Header from './Components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

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
    </>
  );
}

export default App;
