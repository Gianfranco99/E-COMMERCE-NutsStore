import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product.jsx";
import "./Catalogo.css";

import { addProductCart, getProducts } from "../redux/actions/actions";

function Catalogo() {
  const [CategorySelected, setCategorySelected] = useState("TODOS");
  const dispatch = useDispatch();
  const producto = useSelector((state) => state.products);
  const productsIncart = useSelector((state) => state.productCart);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    console.log(productsIncart);
  }, [productsIncart]);

  const selectedChange = (e) => {
    let value = e.target.value;
    setCategorySelected(value);
  };

  const addProductToCart = (item) => {
    dispatch({
      type: "ADDPRODUCT_CART",
      payload: item,
    });
  };

  return (
    <div>
      <div className="catalogo-banner">
        <p className="titulo-tienda">Tienda</p>
      </div>
      <div className="categoriass-container">
        <div className="select-categorias">
          <p className="titulo-categorias">Shop by categories</p>
          <select
            className="select"
            value={CategorySelected}
            onChange={selectedChange}
          >
            <option value="TODOS">TODOS</option>
            <option value="frutos secos">frutos secos</option>
            <option value="castañas de caju">castañas de caju</option>
            <option value="nueces">nueces</option>
            <option value="harinas">harinas</option>
          </select>
        </div>
        <div className="productos-container">
          {producto &&
            CategorySelected === "TODOS" &&
            producto.map((p, i) => (
              <Product addProductToCart={addProductToCart} data={p} />
            ))}
          {producto &&
            CategorySelected !== "TODOS" &&
            producto
              .filter((el) => el.category === CategorySelected)
              .map((p, i) => (
                <Product addProductToCart={addProductToCart} data={p} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogo;
