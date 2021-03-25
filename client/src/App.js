import React from 'react';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogue/Catalogo';
import NavBar from './components/NavBar/NavBar';
import AddProduct from './components/AddProduct/AddProduct'
import AddCategoria from './components/AddCategory/AddCategoria'
import SearchProduct from "./components/SearchBar/SearchProduct"
import Home from "./components/Home/Home"
import Nosotros from "./components/AboutUS/Nosotros"
import MiCuenta from "./components/MyUser/MiCuenta"
import Registrarse from "./components/Login/Registrarse"
import Carrito from "./components/Cart/Carrito"
import ProductDetail from './components/Product/ProductDetail';
import GuestRoute from './containers/GuestRoute';
import Order from './components/Order/order'
import AuthRoute from './containers/AuthRoute';
import Container from 'react-bootstrap/Container';
import User from "./components/Users/User"
import { useSelector } from "react-redux";
import Password from './components/Password/Password';
import MercadoPago from "./components/MercadoPago/MercadoPago"
import IngresarEmail from './components/Password/IngresarEmail';
import InicioDeSesion from './components/Login/InicioDeSesion';


function App() {
  //const loggedIn = useSelector((state) => state.loggedIn);
  // const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Router>
        <GuestRoute path='/' component={NavBar }/>
        <GuestRoute exact path='/' component={Home}/>
        <GuestRoute exact path='/catalogo' component={Catalogo} />
        <GuestRoute path='/SearchProduct' component={SearchProduct}/>  
        <GuestRoute path='/products/:id' component={Catalogo}/>
        <GuestRoute path='/about' component={Nosotros}/>
        <AuthRoute path='/micuenta' component={MiCuenta}/>
        <GuestRoute path='/login' component={InicioDeSesion}/>
        <GuestRoute path='/registro' component={Registrarse}/>    
        <GuestRoute path='/carrito' component={Carrito}/> 
        <GuestRoute path='/addProduct' component={AddProduct}/>
        <GuestRoute path='/addCategoria' component={AddCategoria} />
        <GuestRoute path='/productDetail' component={ProductDetail}/>
        <GuestRoute path='/order' component={Order}/>
        <GuestRoute path='/recuperar-contraseña' component={Password}/>
        <GuestRoute path='/mercadopago/pagos' component={MercadoPago}/>
        <AuthRoute path='/user' component={User}/>
        <GuestRoute path='/email' component={IngresarEmail}/>
  </Router>
 </div>
  );
}

export default App;
