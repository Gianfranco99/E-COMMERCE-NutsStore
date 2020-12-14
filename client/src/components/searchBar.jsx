import React, {useState} from 'react';
<<<<<<< HEAD
import style from './searchBar.module.css';

function SearchBar ({onSearch}){
  const [producto, setProducto]= useState("");
  
=======

function SearchBar ({onSearch}){
  const [producto, setProducto]= useState("");

>>>>>>> b25bdcdcb39a01f0c0e2a22c4e8136091558d80e
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

<<<<<<< HEAD
export default SearchBar;

// import React, {useState} from 'react';

// function SearchBar ({onSearch}){
//   const [producto, setProducto]= useState("");

//   return (
//     <form onSubmit={e => {e.preventDefault();
//       onSearch(producto); 
//       setProducto("")
//     }}>
//     <input
//     type="text"
//     placeholder="producto..."
//     value={producto}
//     onChange={ e => {setProducto(e.target.value)}}
//     />
//     <input type="submit" value="agregar"/>
//     </form>
//   )
// }

// export default SearchBar;
=======

export default SearchBar;
>>>>>>> b25bdcdcb39a01f0c0e2a22c4e8136091558d80e
