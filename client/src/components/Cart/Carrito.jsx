import React, { useEffect, useState } from 'react';
import "./Carrito.css"
import imageneliminar from "../../assets/cruz.png"
import {useSelector,useDispatch} from "react-redux";
import Product from "../Product/Product"
import {increment,decrement,cleanCart,removeItemCart} from '../../redux/actions/actions'
function Carrito() {
const carrito = useSelector(state => state.productCart)
const cantidad = useSelector(state => state.count)
const dispatch = useDispatch()
let contador = 0;


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
                    <th>ELIMINAR</th>
                </tr>
                {carrito.map((m, i) =>(
                        <tr>
                            <td>{m.id}</td>
                            <td>{m.name}</td>
                            <td>{m.price}</td>
                            <td>
                                <button onClick={() => cantidadProductos()}>+</button>
                                <input value={contador}></input>
                                <button  onClick={() => restar()}>-</button>
                            </td>
                            <td>SUBTOTAL</td>
                            <td>
                                <button onClick={() => dispatch(removeItemCart({id : m.id}))}>x</button>
                            </td>
                        </tr>
                    ))}
                    {/* <tr> <td><img className= "imageneliminar" src= {imageneliminar}></img></td> </tr> */}
              
                 
            </table>
            <div><button onClick={()=>dispatch(cleanCart())}>limpiar carrito</button></div>
        </div>

    </div>

  );
}

export default Carrito