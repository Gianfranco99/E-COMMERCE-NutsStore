import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import AddProductForm from './../AddProduct/AddProductForm';
import EditProductForm from './EditProductForm';
import ProductTable from '../Tables/ProductTable';
import style from './../AddProduct/Admin.module.css';
import axios from 'axios';
import {getProducts} from '../../redux/actions/actions';
//instalar react-hook-form

function Admin() {
  const dispatch = useDispatch();
  const productsData = [];
  //estado.
  const [products, setProducts] = useState(productsData);

  //agregar producto
  
  const addProduct = (product) => {
    axios
      .post("http://localhost:3001/products", product)
      .then((res) => console.log(res));
  };

  //eliminar producto
  const deleteProduct = (id,e) => {
    var raw = "";
    console.log("eliminado",id)
    var requestOptions = {
    method: 'DELETE',
    body: raw,
    redirect: 'follow'
    };

    fetch(`http://localhost:3001/products/${id}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    alert("producto eliminado")
    
    
  };

  //editar producto
  const [editing, setEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    name: "",
    description: "",
    stock: "",
    price: "",
    category: "",
  });

  const editRow = (product) => {
    dispatch({type: "EDIT_PRODUCT"})
    setEditing(true);
    setCurrentProduct({
      id: product.id,
      name: product.name,
      description: product.description,
      stock: product.stock,
      price: product.price,
      category: product.category,
    });
  };

  const updateProduct = (id, updateProduct) => {
    console.log('pasa Update', updateProduct, id)
    setEditing(false);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"id":id,"name":updateProduct.name,"description":updateProduct.description,"category":updateProduct.category,"price":updateProduct.price,"stock":updateProduct.stock});

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:3001/products/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    setProducts(
      products.map((product) => (product.id === id ? updateProduct : product))
    );
      
  };

  // const camelCase = (props) =>{
  //   toString.CamelCase(props)
  // }


  useEffect(() => {
    dispatch(getProducts());
 }, [])
 

  return (
    <div className={style.container}>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit product</h2>
              <EditProductForm
                currentProduct={currentProduct}
                updateProduct={updateProduct}
              />
            </div>
          ) : (
            <div>
              <h2>Agregar producto</h2>
              <AddProductForm addProduct={addProduct} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Lista de productos</h2>
          <ProductTable
            products={products}
            deleteProduct={deleteProduct}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default Admin;
