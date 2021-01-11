import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './Admin2.module.css';
import CategoryTable from '../Tables/CategoryTable'
import EditCategoryForm from '../AddCategory/EditCategoryForm'

function FormCategorie() {
  const categoriesData = [];
  //estado.
  const [categories, setCategories] = useState(categoriesData);

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

  const updateCategory = (id, updateCategory) => {
    console.log('pasa Update', updateCategory, id)
    setEditing(false);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"id":id,"name":updateCategory.name,"description":updateCategory.description});

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:3001/products/category/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    setCategories(
      categories.map((category) => (category.id === id ? updateCategory : category))
    );

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
                <div className="flex-large">
                <h2>Lista de categorías</h2>
                <CategoryTable
                  categories={categories}
                  editRow={editRow}
                />
                </div>
            </div>
        </div>
        <div>
              <h2>Editar categoría</h2>
              <EditCategoryForm
                currentCategory={currentCategory}
                updateCategory={updateCategory}
              />
            </div>
    </div>
  )
}

export default FormCategorie;