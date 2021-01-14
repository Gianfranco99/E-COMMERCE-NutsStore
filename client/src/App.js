import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogue/Catalogo';
import NavBar from './components/NavBar/NavBar';
import Admin from './components/AddProduct/prueba'
import Admin2 from './components/AddCategory/Admin2'
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
function App() {
  const loggedIn = useSelector((state) => state.loggedIn);
  const user = useSelector((state) => state.user);

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
        {/* {loggedIn && <GuestRoute exact path='/admin2' component={Admin2} />} */}
        <GuestRoute exact path='/admin2' component={Admin2} loggedIn= {loggedIn}/>
        <GuestRoute exact path='/productDetail' component={ProductDetail}/>
        <GuestRoute exact path='/order' component={Order}/>

        <GuestRoute exact path='/user' component={User}/>
  </Router>
 </div>
  );
}

export default App;
