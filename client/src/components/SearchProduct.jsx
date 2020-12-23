import React from "react"
import Product from "./Product.jsx"

export default function SearchProduct({product}){
    if (product){
        console.log(product)
        return (
            <div>
              
                {product.map( p => <Product
                name={p.name}
                description= {p.description}
                price={p.price}
                stock={p.stock} 
                />
                )}
            </div>
            
        );
    } 

    else {
        return (
        <div> No existe el producto</div>)
        
    }
}