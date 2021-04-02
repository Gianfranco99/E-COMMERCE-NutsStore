import React from "react";
import SearchBar from "../SearchBar/searchBar";
import { Link } from "react-router-dom";
import "./NavBar.css";
import NavLogo from "../../assets/logo.png";
import IconoUsuarioVerde from "../../assets/logoverde.png";
import IconoUsuario from "../../assets/iconousuario.png";
import Carrito from "../../assets/carritoMobile.png";
import { useSelector } from "react-redux";
//import Product from './Product.js

function Nav() {
  const carrito = useSelector((state) => state.productCart);
  const loggedIn = useSelector((state) => state.auth.loggedIn); 
  const user = useSelector((state) => state.user);

  return (
  <div className="container-nav">

    <nav>
      <div className="nav">
      <div className="logo-titulo">
        <img src={NavLogo}></img>
        <span>Nuts Store</span>
      </div>
      <div className="nav2">
        <div className="categorias-container">
          <ul>
            <li>
              <Link to="/">INICIO</Link>
            </li>
            <li>
              <Link to="/catalogo">TIENDA</Link>
            </li>
            <li>
              <Link to="/about">NOSOTROS</Link>
            </li>
            </ul>
        </div>
        <div className="searchbar-carrito">
          <SearchBar />        
            {loggedIn && user && (
              <div>
              <Link to="/micuenta">
              <img className="icono-usuario" src={IconoUsuarioVerde} />
                </Link>
              </div>
              )}
            {!loggedIn && (
          <div>
            <Link to="/login">
              <img className="icono-usuario" src={IconoUsuario} />
            </Link>
          </div>
            )}
          <div style={{ position: "relative" }}>
            <Link to="/Carrito">
              <img className="carrito" src={Carrito}></img>
            </Link>
            <span className="numeroDeCarrito">
              {carrito.map((p) => p.quantity).reduce((a, b) => a + b, 0)}
            </span>
          </div>
        </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Nav;
