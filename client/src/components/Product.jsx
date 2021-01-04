import React from 'react';

export default function Producto(props){
    return (
    <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <h4>{props.price}</h4>
        <h4>{props.stock} </h4>
    </div>
    )
    
}
