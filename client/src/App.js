import React, {useState} from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogo';
import ProductCard from './components/productCard';
import NavBar from './components/NavBar';
import Admin from './components/Admin'
import Admin2 from './components/Admin2'


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
