import React, {useState} from 'react';
import { Link,Route,Router, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import {searchProducts,searchProductsByDescription} from "../../redux/actions/actions"



function SearchBar (){
  const [producto, setProducto]= useState("");
  let history = useHistory();


  const dispatch = useDispatch()

  function handleClick() {
    history.push("/SearchProduct");
  }


  return (
    <form onSubmit={e =>
     {
      e.preventDefault();
      dispatch(searchProducts(producto))
      // dispatch(searchProductsByDescription(producto))
      setProducto("")
    }}>
    <input
    placeholder="producto..."
    value={producto}
    onChange={ e => {setProducto(e.target.value)}}
    />
    <button className= "button-search" type="submit" onClick={handleClick} >Buscar</button>
    
    </form>
  )
}






export default SearchBar;
