import React from 'react';
import "./Carrito.css"
import imageneliminar from "../../assets/cruz.png"

function Carrito() {

  return (
    <div>
        <div className= "img-nosotros">
            <p className= "titulo-carrito">Carrito</p>
        </div>
        <div className= "div-table">
            <table>
                <tr className= "titulos-tabla">
                    <th>NOMBRE DEL PRODUCTO</th>
                    <th>PRECIO</th>
                    <th>CANTIDAD</th>
                    <th>SUBTOTAL</th>
                    <th>EDITAR/ELIMINAR</th>
                </tr>
                <tr>
                    <td>Nueces</td>
                    <td>$100</td>
                    <td>1</td>
                    <td>$100</td>
                    <td><img className= "imageneliminar" src= {imageneliminar}></img></td>
                </tr>
            </table>
        </div>

    </div>

  );
}

export default Carrito;