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
        <div className="carrusel">
          <div className="tarjeta">
            <img className="img-tarjeta" src={imageAlmendra} height="180px" border-radius-top="12px" alt="Card 1"/>
            <div className="container-tarjeta">
              <p className="title">Almendra</p>
              <p className="cantidad">Cantidad</p>
              <p className="description">Lorem ipsum dolor.</p>
              <p className="price">$ 50.00</p>
            </div>
          </div>
                 <div className="tarjeta">
                 <img className="img-tarjeta" src={imageAlmendra} height="180px" alt="Card 2"/>
                 <div className="container-tarjeta">
                    <p className="title">Pistacho</p>
                    <p className="cantidad">Cantidad</p>
                    <p className="description">Lorem ipsum dolor.</p>
                    <p className="price">$ 30.00</p>
                   </div>
                 </div>
                 <div className="tarjeta">
                 <img className="img-tarjeta"  src={imageAlmendra} height="180px" alt="Card 3"/>
                 <div className="container-tarjeta">
                    <p className="title">Nueces</p>
                    <p className="cantidad">Cantidad</p>
                    <p className="description">Lorem ipsum dolor.</p>
                    <p className="price">$ 40.00</p>
                   </div>
                 </div>
             </div>
             <br/>
             <div className="carrusel">
                 <div>
                     <img className="banner" src={bannerAlmendra} alt="banner Almendra"/>
                 </div>
                 <div >
                     <img className="banner" src={bannerPistacho} alt="banner Pistacho"/>
                 </div>
             </div>
             <br/>
             <div>
                 <h2>Productos Destacados</h2>
                 <section className="destacados">
                 <div className="tarjeta-destacados">
                 <img className="img-tarjeta-destacados"  src={imageAlmendra} alt="Card 1"/>
                 <div className="container-tarjeta-destacados">
                    <p className="title-destacados">Nueces</p>
                    <p className="price">$ 40.00</p>
                   </div>
                 </div>
                 <div className="tarjeta-destacados">
                 <img className="img-tarjeta-destacados"  src={imageAlmendra} alt="Card 1"/>
                 <div className="container-tarjeta-destacados">
                    <p className="title-destacados">Nueces</p>
                    <p className="price">$ 40.00</p>
                   </div>
                 </div>
                 <div className="tarjeta-destacados">
                 <img className="img-tarjeta-destacados"  src={imageAlmendra} alt="Card 1"/>
                 <div className="container-tarjeta-destacados">
                    <p className="title-destacados">Nueces</p>
                    <p className="price">$ 40.00</p>
                   </div>
                 </div>
                 <div className="tarjeta-destacados">
                 <img className="img-tarjeta-destacados"  src={imageAlmendra} alt="Card 1"/>
                 <div className="container-tarjeta-destacados">
                    <p className="title-destacados">Nueces</p>
                    <p className="price">$ 40.00</p>
                   </div>
                 </div>
                 <div className="tarjeta-destacados">
                 <img className="img-tarjeta-destacados"  src={imageAlmendra} alt="Card 1"/>
                 <div className="container-tarjeta-destacados">
                    <p className="title-destacados">Nueces</p>
                    <p className="price">$ 40.00</p>
                   </div>
                 </div>
                 </section>
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