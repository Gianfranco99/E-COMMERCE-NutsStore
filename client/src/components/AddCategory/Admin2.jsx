import React from 'react';
import { useForm } from 'react-hook-form';
import style from "./Admin2.module.css";

function FormCategorie() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data, e) => {
    console.log(data);
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"name":`${data.name}`,"description":`${data.description}`});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:3001/products/category", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        e.target.reset();
  };

  return (
    <div className={style.container}>
        <div className="flex-row">
            <div className="flex-large">
                <form onSubmit={handleSubmit(onSubmit)}>
                <label>Categoria</label>
                <input name="name" ref={register({ required: true })} />
                <label>Descripción</label>
                <input name="description" ref={register({ required: true })} />
                {errors.name && 'Se requiere una categoría'}
                <br></br>
                <br></br>
                <input type="submit" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormCategorie;