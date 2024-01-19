import ProductImages from './Components/ProductImages/ProductImages';
import ProductCarousel from './Components/ProductCarousel/ProductCarousel';
import '@/assets/styles/globals.scss';

function App() {
  return (
    <div className="wrapper">
      <ProductCarousel />
      <ProductImages />
    </div>
  );
}

export default App;
