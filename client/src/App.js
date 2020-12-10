import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
//import Product from './components/Product';
import Catalogo from './components/Catalogo';
import ProductCard from './components/productCard';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
  <Router>
    <Route
      path='/'
      render={() => <NavBar/>}
    />
    {/*<Route
      exact path='/'
      render={() => <Product/>}
    /> */}
    <Route
      path='/catalogo'
      component={() => <Catalogo/>}
    />
    <Route
      path='/productCard'
      render={() => <ProductCard/>}
    />
    <Route
      exact path='/products'
      render={() => <Catalogo/>}
    />
    <Route
      exact path='/products/:id'
      render={() => <Catalogo/>}
    />
    
  </Router>
</div>
  );
}

export default App;
