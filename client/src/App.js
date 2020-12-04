import './styles/app.css';
import Header from './components/Header';
import Footer from  './components/Footer/Footer';
import Categories from './components/Categories';
import Cart from './components/Cart/Cart';
import {Switch, 
Route, 
Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
