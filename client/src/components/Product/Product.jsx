import React from 'react';
import './ProductCard.css';
import {useDispatch, useSelector} from 'react-redux';
import {addProductCart, DetailProduct} from '../../redux/actions/actions';
import { Link } from 'react-router-dom';


export default function Producto(props){
    const dispatch = useDispatch();
     const data = useSelector(state => state.products)
    // const Example = <img src={`data:image/jpeg;base64,${props.image}`} />
    

    console.log(data)
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={props.image} alt="no image"/>
                
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

