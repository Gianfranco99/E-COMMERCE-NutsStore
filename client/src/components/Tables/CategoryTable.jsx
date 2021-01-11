import React, { useState } from 'react';
import { useSelector} from "react-redux";

const CategoryTable = (funcion) => {
    const props = useSelector((state) => state);
    console.log('recibe fff',funcion)

    //eliminar categoría
  const deleteCategory = (id) => {
    var raw = "";

    var requestOptions = {
    method: 'DELETE',
    body: raw,
    redirect: 'follow'
    };

    fetch(`http://localhost:3001/products/category/${id}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  };
   //editar categoría
   const [editing, setEditing] = useState(false);
   const [currentCategory, setCurrentCategory] = useState({
     id: null,
     name: "",
     description: "",
   });
 
   const editRow = (category) => {
     setEditing(true);
     setCurrentCategory({
       id: category.id,
       name: category.name,
       description: category.description,
     });
   };
     
    return (
        <table>
            <thead>
            <tr>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Editar/Borrar</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.length > 0 ?
                    props.map(categories => (
                        <tr key= {categories.id}>
                            <td>{categories.name}</td>
                            <td>{categories.description}</td>
                            <td>
                            <button 
                                className="button muted-button"
                                onClick={() => {editRow(categories)}}
                            >
                                Editar
                            </button>
                            <button 
                                className="button muted-button"
                                onClick={() => {deleteCategory(categories.id)}}
                            >
                                Borrar
                            </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>Sin categorías</td>
                        </tr>
                    )
                }
            
            </tbody>
        </table>
    )
}



export default CategoryTable;