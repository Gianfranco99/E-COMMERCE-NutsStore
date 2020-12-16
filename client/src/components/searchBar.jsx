import React, {useState} from 'react';

function SearchBar ({onSearch}){
  const [producto, setProducto]= useState("");

  return (
    <form onSubmit={e => {e.preventDefault();
      onSearch(producto); 
      setProducto("")
    }}>
    <input
    type="text"
    placeholder="producto..."
    value={producto}
    onChange={ e => {setProducto(e.target.value)}}
    />
    <input type="submit" value="agregar"/>
    </form>
  )
}


export default SearchBar;
