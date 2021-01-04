import React, { useState } from "react";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import ProductTable from "./ProductTable";
import { v4 as uuidv4 } from "uuid";
import style from "./Admin.module.css";
import axios from "axios";

//instalar react-hook-form

function Admin() {
  const productsData = [
    // { id: uuidv4(), name: 'Nueces 1', description: 'Cereal 1', stock: '20', price: '100', category: 'categoria' },
    // { id: uuidv4(), name: 'Nueces 2', description: 'Cereal 2', stock: '20', price: '100', category: 'categoria' },
    // { id: uuidv4(), name: 'Nueces 3', description: 'Cereal 3', stock: '20', price: '100', category: 'categoria' },
  ];
  //stado.
  const [products, setProducts] = useState(productsData);

  //agregar producto
  const addProduct = (product) => {
    axios
      .post("http://localhost:3001/products", product)
      .then((res) => console.log(res));
  };

  //eliminar producto
  const deleteProduct = (id) => {
    console.log(id);

    setProducts(products.filter((product) => product.id !== id));
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
    setEditing(false);

    setProducts(
      products.map((product) => (product.id === id ? updateProduct : product))
    );
  };

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
            // setEditing={setEditing}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default Admin;
