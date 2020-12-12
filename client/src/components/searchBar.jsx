import React from 'react';
import style from './searchBar.module.css';

function SearchBar() {
  
  return (
    <div className={style.form}>
      <input type="search" placeholder="Search products..." aria-label="Search"/>
      <button>Buscar</button>
    </div>
  );
}

export default SearchBar;