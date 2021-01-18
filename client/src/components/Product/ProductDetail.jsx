import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProductCart } from '../../redux/actions/actions';
import ReviewTable from '../Tables/ReviewTable';
import ReviewForm from '../Review/ReviewForm';
import qualify4  from '../../assets/qualify4.png';

    

export default function ProductDetail () {
    const dispatch = useDispatch();
    const product = useSelector(state => state.detailProduct);
    
      return(
        <div>
        <div className="container">
          { product.stock > 0 ? (
              <div className="details">
                <div className="big-img">
                  <img src={product.image} alt=""/> 
                </div>
  
                <div className="box">
                  <div className="row">
                    <h2>{product.name}</h2>                    
                  </div>
                  <p>{product.description}</p>
                  <h3>${product.price}</h3>  
                  <br/>
                  <label>Stock: {product.stock}</label>
                  <td><img className="qualify-img"src={qualify4} alt="qualify 4" /></td>
                 
                  <button className="cart" onClick={() => dispatch(addProductCart(product))}>
                      Agregar al carrito
                    </button>
  
                </div>

              </div>

          ) : (

              <div className="details">
                <div className="big-img">
                  <img src={product.image} alt=""/> 
                </div>
  
                <div className="box">
                  <div className="row">
                    <h2>{product.name}</h2>
                  </div>
                  <h3>${product.price}</h3>
  
                  <p>{product.description}</p>
                 
                  <label>Stock</label>
                  <label>Producto no disponible</label>  
                </div>
              </div>
            )
        }
        </div>
        <div className="container">
        <div className="review-container">
        <div className="add-review">
            <h2>Agregar comentario</h2>
            <ReviewForm/>
          </div>
          <br/>
        <div className="see-review">
          <h2>Todos los comentarios</h2>
          <ReviewTable
          id={product.id}/>
        </div>
        </div>
        <br/>
        </div>
        </div>
      );
    
  }
  