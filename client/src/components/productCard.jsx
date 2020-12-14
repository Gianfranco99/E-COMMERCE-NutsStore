import React from 'react';
import Product from './Product';
<<<<<<< HEAD


function ProductCard({product}) {
    if (product){
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
        <div> No exite el producto</div>)
        
    }
    
=======

function ProductCard(product) {
    return (

      
        <div>
            <h1>Product Card</h1>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
        </div>
    );
>>>>>>> b25bdcdcb39a01f0c0e2a22c4e8136091558d80e
}
/*
function ProductCard({product}) {
    if (product){
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
        <div> No exite el producto</div>)
        
    } 
    

function Dashboard() {
   return (
     <div className="Dashboard">
       <header className="Dashboard-header">
          <div>
             <Token/>
  
          </div>
        </header>
      </div>
    );
  }
  */
  // export default Dashboard;
export default ProductCard;