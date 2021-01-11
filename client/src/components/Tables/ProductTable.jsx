import React from 'react';
import { useSelector } from "react-redux";

const ProductTable = (funcion) => {
    const props = useSelector((state) => state);

    return (
        <table>
            <thead>
            <tr>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Categoría</th>
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
                                Editar
                            </button>
                            <button 
                                className="button muted-button"
                                onClick={() => {funcion.deleteProduct(product.id)}}
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



export default ProductTable;