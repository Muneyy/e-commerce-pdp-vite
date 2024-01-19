import ProductImages from './Components/ProductImages/ProductImages';
import ProductCarousel from './Components/ProductCarousel/ProductCarousel';
import '@/assets/styles/globals.scss';
import useMediaQuery from './Hooks/useMedia';

function App() {
  const isMobileView = useMediaQuery(375);
  return (
    <div>
      {isMobileView ? (
        <ProductCarousel />
      ) : (
        <div className="wrapper">
          <ProductImages />
        </div>
      )}
    </div>

  );
}

export default App;
