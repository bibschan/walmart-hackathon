import './styles/app.css';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from  './components/Footer/Footer'


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
