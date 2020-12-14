import React from 'react';
import Product from './Product';


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
    
}
// function Dashboard() {
//     return (
//       <div className="Dashboard">
//         <header className="Dashboard-header">
//           <div>
//               <Token/>
  
//           </div>
//         </header>
//       </div>
//     );
//   }
  
//   export default Dashboard;
export default ProductCard;