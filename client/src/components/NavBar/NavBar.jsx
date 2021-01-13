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
  const loggedIn = useSelector((state) => state.loggedIn);
  const user = useSelector((state) => state.user);

  return (
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
          <Link to="/micuenta">
            {loggedIn && user.isAdmin && (
              <img className="icono-usuario" src={IconoUsuarioVerde} />
            )}
            {loggedIn && !user.isAdmin && (
              <img className="icono-usuario" src={IconoUsuarioVerde} />
            )}
            {!loggedIn && <img className="icono-usuario" src={IconoUsuario} />}
          </Link>
          <Link to="/Carrito">
            <img className="carrito" src={Carrito}></img>
          </Link>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
