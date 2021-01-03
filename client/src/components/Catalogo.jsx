<<<<<<< HEAD
import React, {useState} from 'react';
import Producto from './product.jsx'
//import Producto from './Product';
import ProductCard from './productCard.jsx';
=======
import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import Product from "./Product.jsx"
>>>>>>> 531d3c6d3563cbf9cdd6a65ad08ecbb65e853928



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
    if(props){

<<<<<<< HEAD
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
=======


  return (
    <div className="catalogo-banner">
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
          <Product
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
          <Product
            name={p.name}
            description={p.description}
            price={p.price}
            stock={p.stock}
            />
        ) ))
      }
      </div>
    </div>
  );
>>>>>>> 531d3c6d3563cbf9cdd6a65ad08ecbb65e853928
}

export default Catalogo;

