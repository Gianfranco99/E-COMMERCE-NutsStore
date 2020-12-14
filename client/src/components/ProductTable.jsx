import React from 'react';


const ProductTable = (props) => {

    console.log(props.products)
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
                                onClick={() => {props.editRow(product)}}
                            >
                                Edit
                            </button>
                            <button 
                                className="button muted-button"
                                onClick={() => {props.deleteProduct(product.id)}}
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