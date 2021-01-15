import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { addProductCart, getProducts,getCategory} from "../../redux/actions/actions";

const ProductTable = (funcion) => {
    const props = useSelector((state) => state);
    // const dispatch = useDispatch();
    
    console.log(funcion)
    
    return (
        <table>
            <thead>
            <tr>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Categoría</th>
                <th>Editar/Borrar</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.products.length > 0 ?
                    props.products.map(product => (
                        <tr key= {product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.category}</td>
                            <td>
                            <button 
                                className="button muted-button"
                                onClick={() => {funcion.editRow(product)}}
                            >
                                Editar
                            </button>
                            <button 
                                className="button muted-button"
                                onClick={() => {funcion.deleteProduct(product.name)}}
                            >
                                Borrar
                            </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>Sin productos</td>
                        </tr>
                    )
                }
            
            </tbody>
        </table>
    )
}



