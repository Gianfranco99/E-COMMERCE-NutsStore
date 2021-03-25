import React, { useState } from 'react';
import './ProductCard.css';
import {useDispatch, useSelector} from 'react-redux';
import {addProductCart, DetailProduct,getProductByID} from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
export default function Producto(props){
    const dispatch = useDispatch();
     const data = useSelector(state => state.products);


     const maxLength = (props) => {
        if(props.length < 12){
            return props;
        } else {
            return props.slice(0,11) + '...'; 
        }
    };
    
    return (
        <div className='card-container'>
            { 
                props.stock > 0 ? (
                    <div>
                        <div className='image-container'>
                            <img src={props.image} alt="no image"/>                            
                        </div>
                        <div className='card-content'>
                            <div className='card-title'>
                                <p>{props.name}</p>
                            </div>
                            <div className='card-body'>
                                <p>{maxLength(props.description)} <br/>${props.price}</p>
                            </div>
                        </div>
                        <div className='btns'>
                            <div className='btn'>
                                <Link to='/productDetail'>
                                <button onClick={() => dispatch(getProductByID(props.id))}>
                                    <a>Ver más</a>
                                </button>
                                </Link>
                            </div>
                            <div className='btn'>
                            <button onClick={() => dispatch(addProductCart(props))}>
                                <a>Comprar</a>
                            </button>
                            </div>
                            </div>
                </div>
                ) : (
                    <div>
                        <div className='image-container'>
                            <img src={props.image} alt="no image"/>                    
                        </div>
                        <div className='card-content'>
                    <div className='card-title'>
                                <h3>{props.name}</h3>
                        </div>
                        <div className='card-body'>
                                <p>{maxLength(props.description)} <br/>${props.price}</p>
                        </div>
                    </div>
                    <div className='btn'>
                        <label>Producto no disponible</label>
                    </div>
                        <div className='btn'>
                            <Link to='/productDetail'>
                            <button onClick={() => dispatch(DetailProduct(props))}>
                                <a>Ver más</a>
                            </button>
                            </Link>
                        </div>
                    </div>        
                )
            }
        </div>   
             
    )    
}

