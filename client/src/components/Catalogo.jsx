import React, {useState} from 'react';
import Producto from './product.jsx'
//import Producto from './Product';
import ProductCard from './productCard.jsx';

function Catalogo(props) {

  const [CategorySelected, setCategorySelected] = useState('TODOS');

  const selectedChange = (e) => {
  let value = e.target.value
  setCategorySelected (value)
  }
    if(props){

    return (
      <div>
          <select value={CategorySelected} onChange={selectedChange}>  
            <option value="TODOS">TODOS</option>          
            <option value="frutos secos">frutos secos</option>
            <option value="castañas de caju">castañas de caju</option>
            <option value="nueces">nueces</option>
            <option value="harinas">harinas</option>
          </select>

        {
          CategorySelected === 'TODOS' ?
          Producto.map ( p =>(
            <ProductCard
              name={p.name}
              description={p.description}
              price={p.price}
              stock={p.stock}
              />
          ) )
          :
          (
            Producto
            .filter(el => el.category === CategorySelected)
            .map ( p =>(
            <ProductCard
              name={p.name}
              description={p.description}
              price={p.price}
              stock={p.stock}
              />
          ) ))
        }
      </div>
    );
  } else {
    return(
      <div>Sin productos</div>
    )
  }
}

export default Catalogo;

