import React, { useState } from 'react';
import './ProductDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProductCart } from '../../redux/actions/actions';
import ReviewTable from '../Tables/ReviewTable';
import ReviewForm from '../Review/ReviewForm';

    

export default function ProductDetail () {
    const dispatch = useDispatch();
    const product = useSelector(state => state.detailProduct);

  //estado de review.
  
  const review = useSelector(state => state.reviews);
    
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
                  <h3>${product.price}</h3>
  
                  <p>{product.description}</p>
                  <label>Stock</label>
                  <p>{product.stock}</p>
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
                  <p>{product.stock}</p>
                  <label>Producto no disponible</label>  
                </div>
              </div>
            )
        }
        </div>
        <div className="container">
        <div className="review-container">
        <div className="add-review">
            <h2 className="add-title">Agregar comentario</h2>
            <ReviewForm/>
          </div>
          <br/>
        <div className="see-review">
          <h2>Todos los comentarios</h2>
          <ReviewTable
          review={review}
        />
        </div>
        </div>
        <br/>
        </div>
        </div>
      );
    
  }
  