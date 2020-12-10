import React from 'react';
import product from './product.jsx'


function Catalogue() {
  return (
    <div>
      {
        product.map ( p =>(
          <Product
            name={p.name}
            description={p.description}
            price={p.price}
            stock={p.stock}
            />
        ) )
      }
    </div>
  );
}

export default Catalogue;

