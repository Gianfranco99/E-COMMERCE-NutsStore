import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Product/Product.jsx";
import "./Catalogo.css";

import {
  addProductCart,
  getProducts,
  getCategory,
} from "../../redux/actions/actions";

function Catalogo() {
  const [CategorySelected, setCategorySelected] = useState("TODOS");

  const dispatch = useDispatch();

  const producto = useSelector((state) => state.products);

  const category = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const selectedChange = (e) => {
    let value = e.target.value;
    setCategorySelected(value);
  };

  return (
    <div>
      <div className="catalogo-banner">
        <p className="titulo-tienda">Tienda</p>
      </div>
      <div className="categoriass-container">
        <div className="select-categorias">
          <p className="titulo-categorias">Comprar por categorías</p>
          <select
            className="select"
            value={CategorySelected}
            onChange={selectedChange}
          >
            <option value="TODOS">Ver todas</option>
            {category &&
              category.map((c) => <option value={c.name}>{c.name}</option>)}
          </select>
        </div>
        <div className="productos-container">
          {producto &&
            CategorySelected === "TODOS" &&
            producto.map((p) => (
              <Product
                name={p.name}
                description={p.description}
                price={p.price}
                stock={p.stock}
                id={p.id}
                image={p.image}
              />
            ))}
          {producto &&
            CategorySelected !== "TODOS" &&
            producto
              .filter((el) => el.category === CategorySelected)
              .map((p) => (
                <Product
                  name={p.name}
                  description={p.description}
                  price={p.price}
                  stock={p.stock}
                  id={p.id}
                  image={p.image}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogo;
