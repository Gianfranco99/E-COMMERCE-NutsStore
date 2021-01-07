import React from 'react';
import  { useState} from 'react'
import Details from './Details';
import './ProductDetail.css';
import {useDispatch, useSelector} from 'react-redux'
import {addProductCart} from '../../redux/actions/actions'

    

export default function ProductDetail () {
    const dispatch = useDispatch();
    const product = useSelector(state => state.detailProduct)
    
      return(
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
                  <h3>${product.price}</h3>
  
                  <p>{product.description}</p>
                  <label>Stock</label>
                  <p>{product.stock}</p>
  
                  {/* <Details images={item.src} tab={handleTab} /> */}
                  <button className="cart" onClick={() => dispatch(addProductCart(product))}>
                      agregaralCart
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
                  <p>{product.stock}</p>
  
                  {/* <Details images={item.src} tab={handleTab} /> */}
                  <label>Producto no disponible</label>  
                </div>
              </div>
            )
        }
        </div>
      );
    
  }
  