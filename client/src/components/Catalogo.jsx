import React from 'react';
import Product from './Product'


function Catalogo(product) {
  return (
    // <div>
    //   {
    //     product.map ( p =>(
    //       <Product
    //         name={p.name}
    //         description={p.description}
    //         price={p.price}
    //         stock={p.stock}
    //         />
    //     ) )
    //   }
    // </div>
    <div>
      <h1>Catalogo</h1>
      <Product/>
    </div>
  );
}

export default Catalogo;

