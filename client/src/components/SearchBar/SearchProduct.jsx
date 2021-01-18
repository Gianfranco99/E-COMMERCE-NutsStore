import React from "react"
import Product from "../Product/Product"
import {useSelector} from "react-redux"
import search from "./searchBar.module.css"


export default function SearchProduct(){
    const product = useSelector(store => store.productSearch)
    if (product){
        return (
            <div className="contenedor-search">
                <div className="container-search">              
                    {product.map( p => <Product
                    name={p.name}
                    description= {p.description}
                    price={p.price}
                    stock={p.stock}
                    image={p.image}   
                    />
                    )}
                </div>
            </div>
        );
    }
    else {
        return (
        <div className="noexist"> No existe el producto</div>)
        
    }
}