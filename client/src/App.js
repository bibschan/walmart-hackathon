import './styles/app.css';
import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Footer from  './components/Footer/Footer';
import Cart from "./components/Cart/Cart";
import {Switch} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends React.Component{
  state = {
    arrivalBanner: false
  }

  render() {
    return (
      <Router>
      <Header arrivalBanner={this.state.arrivalBanner}/>
        <Switch>
        <Route path = '/' exact component = {Categories} />
        <Route path = '/cart' exact component ={Cart} />
        </Switch>
      <Footer />
      </Router>
        
    );
  }
}

export default App;
