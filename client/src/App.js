import './styles/app.css';
import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Footer from  './components/Footer/Footer';
import Cart from "./components/Cart/Cart";
import {Switch, Route,  Link} from 'react-router-dom';


class App extends React.Component{
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
