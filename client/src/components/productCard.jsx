import React from 'react';
//import Product from './Product'


function ProductCard(product) {
    return (

        // <div>
        //     
        // </div>
        <div>
            <h1>Product Card</h1>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
        </div>
    );
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