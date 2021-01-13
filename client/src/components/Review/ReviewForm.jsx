import React, { useState,useEffect } from 'react';
import './ReviewForm.css';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../../redux/actions/actions';

const ReviewForm = (props) => {
  const dispatch = useDispatch();
  const reviewState = useSelector((state) => state.reviews);

  //agregar review
  const addReview = (review) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"qualify":review.qualify,"description":review.comentario, "productID": reviewState.productId});
    
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

  useEffect(()=>{
    dispatch(getReviews())
    },[])

  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data, e) => {
    e.preventDefault();
    props.addReview({ ...data});
    console.log(data)
    //limpiar campos
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Calificación</label>
      <input
      className="qualify"
        type="number"
        min="0"
        max="5"
        name="qualify"
        ref={register({
          required: { value: true, message: "campo requerido" },
        })}
      />
      <label>Comentario</label>
      <input
      className="text-coment"
        type="text" 
        name="comentario"
        ref={register({
          required: { value: true, message: "campo requerido" },
        })}
      />
      <div className='btn-review'>
          <button onClick={addReview}>
              <a>Publicar comentario</a>
          </button>
      </div>
    </form>
  );
};

export default ReviewForm;