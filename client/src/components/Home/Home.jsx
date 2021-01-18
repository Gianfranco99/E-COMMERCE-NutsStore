import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css"
import imageAlmendra from '../../assets/almendra.jpeg';
import bannerAlmendra from '../../assets/banner-almendra.jpeg';
import bannerPistacho from '../../assets/banner-pistacho.jpeg';
import planta from '../../assets/planta.png';



function Home() {
  
    return (
      <div className="container-home">
        <div className= "container-head">
          <div className= "titulo-descripcion-container">
            <div className= "titulo-container">
              <span className= "titulo1">
                Lo natural y <span className="palabra">saludable</span> en tu hogar, siempre</span>
            </div>
            <div className= "descripcion-container">
              <p className= "descripcion-home">
                Toda la información de las propiedades de los frutos secos en una sola web. <br/> 
                Tambien podes disfrutarlos y recibirlos en tu casa, estás a un click de distancia.</p>
            </div>
          </div>
          <div className= "boton-container">
            <Link to="/catalogo">
              <button className="boton-comprar">COMPRAR</button>
            </Link>
          </div>
        </div>
        <br/>
        <div >
             </div>
             <br/>
             <footer>
             <section className="footer">
             <div className= "separador">
              <div className= "separador1">
                  <img src={planta} alt= "algo" className="planta-imagen"></img>
                  <p className= "lorem-nosotros">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Mauris velit magna, congue et elit ac, vehicula pulvinar nisi.</p>
              </div>
              </div>
             </section>
             <br/>
             <span className="copyright">Copyright &#169; </span>
             </footer>
         </div>
    );
}

export default Home; 