import React, {useState} from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogue/Catalogo';
import NavBar from './components/NavBar/NavBar';
import Admin from './components/EditProduct/Admin'
import Admin2 from './components/AddCategory/Admin2'
import SearchProduct from "./components/SearchBar/SearchProduct"
import Home from "./components/Home/Home"
import Nosotros from "./components/AboutUS/Nosotros"
import MiCuenta from "./components/MyUser/MiCuenta"
import Registrarse from "./components/Login/Registrarse"
import Carrito from "./components/Cart/Carrito"
import Product from "./components/Product/Product"


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
      exact path='/micuenta'
      render={() => <MiCuenta/>}
    />

    <Route
      exact path='/registro'
      render={() => <Registrarse/>}
    />    

    <Route
      exact path='/carrito'
      render={() => <Carrito/>}
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
