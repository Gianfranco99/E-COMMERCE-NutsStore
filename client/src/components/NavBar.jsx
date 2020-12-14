import React from 'react';
import SearchBar from './searchBar';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
//import Product from './Product.jsx';

function Nav() {

  { /* function Nav({onSearch}) */ }
  return (
    <div>
      <nav className={style.nav}>
        <div>
          {/*       <SearchBar onSearch={onSearch} />        */}
          <div>
            <ul className={style.ul}>
              <li className={style.a}><Link className={style.a} to='/'>INICIO</Link></li>
              <li className={style.a}><Link className={style.a} to='/catalogo'>TIENDA</Link></li>
              <li className={style.a}><Link className={style.a} to='/about'>NOSOTROS</Link></li>
              <li className={style.a}><Link className={style.a} to='/admin'>ADMIN</Link></li>
              <li className={style.a}><Link className={style.a} to='/admin2'>ADMIN2</Link></li>
            </ul>
          </div>
        </div>        
      </nav>
    </div> 
  );
};

export default Nav;