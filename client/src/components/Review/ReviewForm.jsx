import React, { useState } from 'react';
import './ReviewForm.css';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const ReviewForm = () => {
  const user = useSelector((state)=> state.user);
  const product = useSelector((state) => state.detailProduct);
  const { register, handleSubmit } = useForm();

  const [newReview, setNewReview] = useState({
    qualify: 0,
    description: ""
  });

  const handleChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    })
  }
  
    //agregar review
    const addReview = (newReview) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({"qualify":newReview.qualify,"description":newReview.description});

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(`http://localhost:3001/products/${product.id}/user/${user.id}/review`, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    };
  
  const onSubmit = (data, e) => {
    e.preventDefault();
    addReview({ ...data });
    console.log(data)
    //limpiar campos
    e.target.reset();
    //window.location.replace("/productDetail");
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
        onChange={handleChange}
        ref={register({
          required: { value: true, message: "campo requerido" },
        })}
      />
      <label>Comentario</label>
      <input
      className="text-coment"
        type="text" 
        name="description"
        onChange={handleChange}
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