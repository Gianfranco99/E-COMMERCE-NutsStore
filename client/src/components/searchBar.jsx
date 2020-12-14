<<<<<<< HEAD
import React, {useState} from 'react';
import style from './searchBar.module.css';
=======
import React from 'react';
>>>>>>> parent of 6df3a8c... varias cositas

function SearchBar ({onSearch}){
  const [producto, setProducto]= useState("");
  
  return (
    <div>
      <input type="text" placeholder="Search products..." />
      <button>Buscar</button>
    </div>
  );
}

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