import React, {useState} from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogo';
import ProductCard from './components/productCard';
import NavBar from './components/NavBar';


function App() {
  const [product, setProduct]=useState([]);
  function onSearch(product){
    const productExample = {
      name: 'Almendra',
      description: 'tal cosa',
      price: 200,
      stock: 'disponible'
    };

    setProduct(oldProducts => [...oldProducts, product])
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
      exact path='/products'
      render={() => <Catalogo/>}
    />
    <Route
      exact path='/products/:id'
      render={() => <Catalogo/>}
    />
    
  </Router>
 </div>
  );
}

export default App;
