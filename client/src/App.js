import './styles/app.css';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from  './components/Footer/Footer';
import Categories from 
import {Switch, 
Route, 
Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
