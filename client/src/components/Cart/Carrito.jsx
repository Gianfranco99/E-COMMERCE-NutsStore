import React from 'react';
import "./Carrito.css"
import imageneliminar from "../../assets/cruz.png"
import {useSelector,useDispatch} from "react-redux";
import Product from "../Product/Product"
function Carrito() {
const carrito = useSelector(state => state.productCart)

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
                {carrito.map((m) =>(
                        <tr>
                            <td>{m.name}</td>
                            <td>{m.price}</td>
                           
                        </tr>
                    ))}
                   
                    {/* <tr> <td><img className= "imageneliminar" src= {imageneliminar}></img></td> </tr> */}
              
                 
            </table>
        </div>

    </div>

  );
}

export default Carrito;