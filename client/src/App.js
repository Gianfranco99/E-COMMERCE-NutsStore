import React from 'react';
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
import ProductDetail from './components/Product/ProductDetail';
import GuestRoute from './containers/GuestRoute';
import AuthRoute from './containers/AuthRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <GuestRoute path='/' component={NavBar }/>
        <GuestRoute exact path='/' component={Home}/>
        <GuestRoute path='/catalogo' component={Catalogo} />
        <GuestRoute path='/SearchProduct' component={SearchProduct}/>  
        <GuestRoute exact path='/products/:id' component={Catalogo}/>
        <GuestRoute exact path='/about' component={Nosotros}/>
        <Route exact path='/micuenta' component={MiCuenta}/>
        <GuestRoute exact path='/registro' component={Registrarse}/>    
        <GuestRoute exact path='/carrito' component={Carrito}/>    
        <GuestRoute exact path='/admin' component={Admin}/>
        <AuthRoute exact path='/admin2' component={Admin2}/>
        <GuestRoute exact path='/productDetail' component={ProductDetail}/>
  </Router>
 </div>
  );
}

export default App;
