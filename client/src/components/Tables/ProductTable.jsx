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
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Edit/Delete</th>
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
                                Edit
                            </button>
                            <button 
                                className="button muted-button"
                                onClick={() => {funcion.deleteProduct(product.name)}}
                            >
                                Delete
                            </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>No Product</td>
                        </tr>
                    )
                }
            
            </tbody>
        </table>
    )
}



export default ProductTable;