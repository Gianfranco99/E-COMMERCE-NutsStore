import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import FileBase64 from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import {getCategory} from "../../redux/actions/actions";

//instalar react-file-base64

const AddProductForm = (props) => {
  //categories desplegable
  // const [CategorySelected, setCategorySelected] = useState('TODOS');
  const [Fotos, setFotos] = useState([]);
  

  const category = useSelector((state) => state.categories)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategory())
    },[])

  const handlerphoto = (files) => {
    
    let photos64 = files.map((el) => el.base64);
    setFotos(photos64);
  };

  const { register, errors, handleSubmit } = useForm();
  
  const onSubmit = (data, e) => {
    e.preventDefault();
    props.addProduct({ ...data, image: Fotos });
    console.log("paso", data)
    //limpiar campos
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Producto</label>
      <input
        type="text"
        name="name"
        ref={register({
          required: { value: true, message: "campo requerido" },
        })}
      />
      <div>{errors?.name?.message}</div>
      <label>Descripción</label>
      <input
        type="text"
        name="description"
        ref={register({
          required: { value: true, message: "campo requerido" },
        })}
      />
      <div>{errors?.description?.message}</div>
      <label>Precio</label>
      <input
        type="text"
        name="price"
        ref={register({
          required: { value: true, message: "campo requerido" },
        })}
      />
      <div>{errors?.price?.message}</div>
      <label>Stock</label>
      <input
        type="text"
        name="stock"
        ref={register({
          required: { value: true, message: "campo requerido" },
        })}
      />
      <div>{errors?.stock?.message}</div>
      <FileBase64 multiple={true} onDone={handlerphoto} />
      <label>Categoría</label>
      {/* <input type="text" name="category" 
            }/> */}
      <select
        name="category"
        ref={register({
          required: { value: true, message: "campo requerido" },
        })}
      >
        
            {category && category.map(c =>
              <option value = {c.name}>{c.name}</option>
              )}
      </select>
      <button >Nuevo producto</button>
    </form>
  );
};