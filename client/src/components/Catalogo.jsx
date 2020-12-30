import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import {ProductosHardcodeados} from './product.js'
//import Producto from './Product';
import ProductCard from './productCard.jsx';

import {getProducts} from "../redux/actions/actions"

function Catalogo() {

  const [CategorySelected, setCategorySelected] = useState('TODOS');
  const dispatch = useDispatch()
  const producto = useSelector(state => state.products);
  useEffect(() => {
   dispatch(getProducts());
}, [])
console.log(producto)

  const selectedChange = (e) => {
  let value = e.target.value
  setCategorySelected (value)
  }
  



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
        producto.map ( p =>(
          <ProductCard
            name={p.name}
            description={p.description}
            price={p.price}
            stock={p.stock}
            />
        ) )
        :
        (
          producto
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
}

export default Catalogo;

