import React from "react"
import Product from "./Product"
import {useSelector} from "react-redux"

export default function SearchProduct(){
    const product = useSelector(store => store.productSearch)
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