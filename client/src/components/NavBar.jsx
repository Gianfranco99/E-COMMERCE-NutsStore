import React from 'react';
import SearchBar from './searchBar';
import { Link } from 'react-router-dom';
import './NavBar.css';
import NavLogo from "../assets/logo.png"
import Carrito from "../assets/carritoMobile.png"
//import Product from './Product.js

//function Nav() 

  function Nav({onSearch}){
  return (
      <nav className="nav">
          <div className="logo-titulo">
              <img src={NavLogo}></img>
              <span>
                Nuts Store
              </span>
          </div>
          <div className= "nav2">
            <div className="categorias-container">      
              <ul>
                <li><Link to='/'>INICIO</Link></li>
                <li><Link to='/catalogo'>TIENDA</Link></li>
                <li><Link to='/about'>NOSOTROS</Link></li>
                <li><Link to='/admin'>ADMIN</Link></li>
                <li><Link to='/admin2'>ADMIN2</Link></li>
                {/* <li className={style.a}><Link className={style.a} to='/SearchProduct'>SearchProduct</Link></li> */}
              </ul>
            </div>
              <div className="searchbar-carrito">
                <SearchBar onSearch={onSearch} /> 
                <img src={Carrito}></img>
              </div>              
          </div>   
      </nav>
  );
};

export default Nav;