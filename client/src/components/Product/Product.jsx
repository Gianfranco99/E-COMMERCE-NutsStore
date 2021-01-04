import React from "react";

export default function Producto({ data, addProductToCart }) {
  return (
    <div>
      <h1>{data.name}</h1>
      {data.image.map((img) => (
        <img src={img} />
      ))}
      <p>{data.description}</p>
      <h4>{data.price}</h4>
      <h4>{data.stock} </h4>
      <button onClick={() => addProductToCart(data)}>Añadir al carrito</button>
    </div>
  );
}
