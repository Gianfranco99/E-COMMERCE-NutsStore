import React from 'react';
import './ProductCard.css';
import {useDispatch,useSelector} from 'react-redux'
import {addProductCart,increment} from '../../redux/actions/actions'

export default function Producto(props){
    const dispatch = useDispatch();
    const producto = useSelector(state => state.products)
    console.log(props)
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={props.image} alt=""/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{props.name}</h3>
                    <h4></h4>
                </div>
                <div className='card-body'>
                    <p>{props.description}</p>
                    <p>${props.price}</p>
                    <p><em>stock:</em> {props.stock} </p>
                </div>
            </div>
            <div className='btn'>
                <button onClick={() => dispatch(addProductCart(props))}>
                    <a>Agregar al carrito</a>
                </button>
            </div>
        </div>
    )    
}

