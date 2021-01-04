import React, {useState} from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogo';
import product from './components/Product';
import NavBar from './components/NavBar';
import Admin from './components/Admin'
import Admin2 from './components/Admin2'
import SearchProduct from "./components/SearchProduct"
import Home from "./components/Home"
import Nosotros from "./components/Nosotros"


function App() {
  return (
    <div className="App">
  <Router>
    <Route path='/' render={() => <NavBar />}
    />
    
    <Route
      exact path='/'
      render={() => <Home/>}
    />

    <Route
      path='/catalogo'
      component={() => <Catalogo/>}
    />
    <Route
      path='/SearchProduct'
      render={() => <SearchProduct />}
    />
    <Route
      exact path='/products'
      render={() => <Catalogo
        product = {product}
      />}
    />
    <Route
      exact path='/products/:id'
      render={() => <Catalogo/>}
    />
    <Route
      exact path='/about'
      render={() => <Nosotros/>}
    />
    <Route
      exact path='/admin'
      render={() => <Admin/>}
    />
    <Route
      exact path='/admin2'
      render={() => <Admin2/>}
    />
    
  </Router>
 </div>
  );
}

export default App;
