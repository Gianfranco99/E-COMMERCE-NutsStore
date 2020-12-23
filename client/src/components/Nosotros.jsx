import React from 'react';
import nosotrosimagen from "../assets/nosotrosimagen.png"
import planta from "../assets/planta.png"
import "./Nosotros.css"

function Nosotros() {

  return (
    <div>
        <div className= "img-nosotros">
            <p className= "titulo-nosotros">Nosotros</p>
        </div>
        <div className= "principal-nosotros">
            <div className='nosotros-bienvenidos-container'>
                <span className= "titulo-nosotros-bienvenidos">
                Bienvenidos a: <br></br><span className="palabra-nosotros">Nuts Store</span> </span>
                <p className="lorem1-nosotros">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit magna, congue et elit ac, vehicula pulvinar nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit magna, congue et elit ac, vehicula pulvinar nisi.<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit magna, congue et elit ac, vehicula pulvinar nisi. Mauris velit magna, congue et elit ac, vehicula pulvinar nisi. Mauris velit magna, congue et elit ac, vehicula pulvinar nisi.</p>
            </div>
            <div>
                <img src={nosotrosimagen} alt= "algo" className= "nosotros-imagen"></img>
            </div>
        </div>
        <div className= "separador">
            <div className= "separador1">
                <img src={planta} alt= "algo" className="planta-imagen"></img>
                <p className= "lorem-nosotros">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Mauris velit magna, congue et elit ac, vehicula pulvinar nisi.</p>
            </div>
        </div>
        <div className= "equipo-nosotros">
        </div>
    </div>

  );
}

export default Nosotros;