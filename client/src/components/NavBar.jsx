import React from 'react';
import SearchBar from './searchBar.jsx';
import { Link } from 'react-router-dom';
//import Product from './Product.jsx';

function Nav() {
  return (
    <div>
      <nav>
        <Link to='/'>
            <p>Product</p>
        </Link>
        <Link to='/catalogo'>
          <p>catalogo</p>
        </Link>
        <Link to='/productcard'>
          <p>Product Card</p>
        </Link>
        <div>        
            <SearchBar/>
        </div>        
      </nav>
    </div>
  );
};

export default Nav;
