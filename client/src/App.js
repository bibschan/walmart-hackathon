import './styles/app.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Footer from  './components/Footer/Footer';
import {Switch, Route,  Link} from 'react-router-dom';


class App {
  state = {
    arrivalBanner: false
  }

  render() {
    return (
      <div className="App">
        <Header arrivalBanner={this.state.arrivalBanner}/>
        <Categories />
        <Footer />
      </div>
    );
  }
}

export default App;
