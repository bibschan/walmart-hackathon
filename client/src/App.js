import './styles/app.scss';
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
      <Footer />
    </div>
  );
}

export default App;
