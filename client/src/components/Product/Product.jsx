import React from 'react';
import './ProductCard.css';
import {useDispatch} from 'react-redux';
import {addProductCart, DetailProduct} from '../../redux/actions/actions';
import { Link } from 'react-router-dom';

export default function Producto(props){
    const dispatch = useDispatch();

    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src="https://cdn.bioguia.com/embed/3ece7bed889ff4c45abb1e84111191524266231/Frutos_secos?imagick=1&size=500" alt=""/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{props.name}</h3>
                </div>
                <div className='card-body'>
                    <p>{props.description}</p>
                    {/* <p>${props.price}</p>
                    <p><em>stock:</em> {props.stock} </p> */}
                </div>
            </div>
            <div className='btn'>
                <button onClick={() => dispatch(addProductCart(props))}>
                    <a>Agregar al carrito</a>
                </button>
            </div>
                <div className='btn-more'>
                    <Link to='/productDetail'>
                    <button onClick={() => dispatch(DetailProduct(props))}>
                        <a>ver mas</a>
                    </button>
                    </Link>
                </div>
        </div>
    )    
}

