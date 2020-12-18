import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css"

function Home() {
    return (
         <div className= "home-container">
            <div className= "titulo-descripcion-container">
             <div className= "titulo-container">
                <span className= "titulo1">
                    Lo natural y <span className="palabra">saludable</span> en tu hogar, siempre</span>
             </div>
             <div className= "descripcion-container">
                <p className= "descripcion-home">
                Toda la información de las propiedades de los frutos secos en una sola<br/> web.
                Tambien podes disfrutarlos y recibirlos en tu casa, estás a un click de distancia.</p>
             </div>
            </div>
             <div className= "boton-container">
            <Link to="/catalogo">
                <button className="boton-comprar">COMPRAR</button>
            </Link>
             </div>
         </div>
    );
}

export default Home;