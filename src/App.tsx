import ProductCarousel from './Components/ProductCarousel/ProductCarousel';
import '@/assets/styles/globals.scss';
import { useMediaQuery } from './Hooks/useMedia';

function App() {
  const isMobileView = useMediaQuery(375);

  return (
    <div className="wrapper">
      {isMobileView ? (<ProductCarousel />) : (
        <div>
          <h1>Desktop View</h1>
        </div>
      )}

    </div>
  );
}

export default App;
