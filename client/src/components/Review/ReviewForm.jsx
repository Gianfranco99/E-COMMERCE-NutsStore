import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { getReview } from '../../redux/actions/actions';

const ReviewForm = (props) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getReview())
    },[])

  const { handleSubmit } = useForm();
  
  const onSubmit = (data, e) => {
    e.preventDefault();
    props.addReview({ ...data});
    console.log(data)
    //limpiar campos
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Comentario</label>
      <input
        type="text"
        name="comentario"
        ref={register({
          required: { value: true, message: "campo requerido" },
        })}
      />
      <label>Calificación</label>
      <input
        type="number"
        name="qualify"
        ref={register({
          required: { value: true, message: "campo requerido" },
        })}
      />
      <button >Publicar comentario</button>
    </form>
  );
};

export default ReviewForm;