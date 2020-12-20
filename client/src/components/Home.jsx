import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css"
import imageAlmendra from '../assets/almendra.jpeg';
import banner from '../assets/banner.jpg';



function Home() {
    return (
        <div>
         <div className= "home-container">
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
                 <div className="cardProduct">
                <img src={imageAlmendra} height="300px" alt="Card 1"/>
                 <h2 >Almendra</h2>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                 <h3 >$ 20.00</h3>
                 </div>
                 <div className="tarjeta">
                 <img src={imageAlmendra} alt="Card 2"/>
                 <h2>Nueces</h2>
                 <p>Voluptatem ratione a aliquam aperiam dignissimos dicta enim quae, tempore repellat accusantium doloremque optio.</p>
                 <h3>$ 30.00</h3>
                 </div>
                 <div className="cardProduct">
                 <img src={imageAlmendra} alt="Card 3"/>
                <h2>Pistacho</h2>
                <p>Tenetur eveniet ullam architecto doloremque aut ratione eos?</p>
                <h3>$ 40.00</h3>
                 </div>
             </div>
             <br/>
             <section className="carrusel">
                 <div>
                     <img src={banner} width="975" alt="banner 1"/>
                 </div>
                 <div>
                     <img src={banner} height="300" alt="banner 2"/>
                 </div>
             </section>
             <br/>
             <div>
                 <h2>Productos Destacados</h2>
                 <section className="carrusel">
                 <div className="cardProduct">
                <img src={imageAlmendra} height="150" alt="1"/>
                 <h2>Almendra</h2>
                 <h3>$ 20.00 - cantidad por este valor</h3>
                 </div>
                 <div className="cardProduct">
                 <img src={imageAlmendra} height="150" alt="Card 2"/>
                 <h2>Nueces</h2>
                 <h3>$ 30.00 - cantidad por este valor</h3>
                 </div>
                 <div className="cardProduct">
                 <img src={imageAlmendra} height="150" alt="Card 3"/>
                <h2>Pistacho</h2>
                <h3>$ 40.00 - cantidad por este valor</h3>
                 </div>
                 </section>
             </div>
             <br/>
             <footer>
             <div className= "boton-container">
            <Link to="/catalogo">
                <button className="boton-comprar">Conocer más</button>
            </Link>
             </div>
             <div className="home-container">
             <div className= "titulo-descripcion-container">
             <div className= "titulo-container">
                <span className= "titulo1">
                    NutStore</span>
             </div>
             </div>
             <div className= "descripcion-container">
                <p className= "descripcion-home">
                Toda la información de las propiedades de los frutos secos en un solo sitio.</p>
             </div>
            </div>
             <br/>
                 <div className="footer">

                 </div>
             <span className="copyright">Copyright &#169; </span>
             </footer>
         </div>
    );
}

export default Home; 