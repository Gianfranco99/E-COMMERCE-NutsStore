import React, {useState} from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogo';
import ProductCard from './components/productCard';
import NavBar from './components/NavBar';
import Admin from './components/Admin'
import Admin2 from './components/Admin2'
import SearchProduct from "./components/SearchProduct"

function App() {
  const [product, setProduct]=useState([]);
  function onSearch(product){
    fetch(`http://localhost:3001/products/search/search?name=${product}`)
    .then(response  => response.json())
    .then((respuesta) =>{
      console.log(respuesta)
      const product = {
        name: respuesta.name,
        description: respuesta.description,
        price: respuesta.price,
        stock: respuesta.stock,
        id:respuesta.id
      };
      setProduct(oldProducts => [...oldProducts, product])
    }).catch(err => console.log(err + "error"))
  
    
  }
  return (
    <div className="App">
  <Router>
    <Route path='/' render={() => <NavBar onSearch={onSearch}/>}
    />
    {/*<Route
      exact path='/'
      render={() => <Product/>}
    /> */}
    <Route
      path='/catalogo'
      component={() => <Catalogo/>}
    />
    <Route
      path='/productCard'
      render={() => <ProductCard product={product}/>}
    />
    <Route
      path='/SearchProduct'
      render={() => <SearchProduct product={product}/>}
    />
    <Route
      exact path='/products'
      render={() => <Catalogo/>}
    />
    <Route
      exact path='/products/:id'
      render={() => <Catalogo/>}
    />
    <Route
      exact path='/about'
      render={() => <Catalogo/>}
    />
    <Route
      exact path='/admin'
      render={() => <Admin/>}
    />
    <Route
      exact path='/admin2'
      render={() => <Admin2/>}
    />
    
  </Router>
 </div>
  );
}

export default App;
