import React from 'react'


export default function productCard(product) {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
        </div>
    )
}