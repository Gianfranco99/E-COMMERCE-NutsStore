import React, { useState } from 'react';
import './ProductDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProductCart } from '../../redux/actions/actions';
import ReviewTable from '../Tables/ReviewTable';

    

export default function ProductDetail () {
    const dispatch = useDispatch();
    const product = useSelector(state => state.detailProduct);
    const reviewsData = [];

  //estado de review.
  const [reviews, setReviews] = useState(reviewsData);

    //agregar producto
  const addReview = (review) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"qualify":review.qualify,"description":review.description});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3001/products/${review.productId}/user/${review.userId}/review`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  const deleteReview = () => {
    var raw = "";

    var requestOptions = {
      method: 'DELETE',
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3001/products/${review.productId}/review/${review.id}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      
  }
    
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
        <div>
            <h2>Agregar comentario</h2>
            <ReviewForm addReview={addReview} />
          </div>
        <div className="flex-large">
          <h2>Todos los comentarios</h2>
          <ReviewTable
            deleteReview ={deleteReview}
          />
        </div>
        </div>
      );
    
  }
  