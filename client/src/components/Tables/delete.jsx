import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from "react-redux";
import {getCategory} from '../../redux/actions/actions';
const CategoryTable = (funcion) => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.categories);

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

   useEffect(()=>{
    dispatch(getCategory())
    },[])

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
                    category.length > 0 ?
                    category.map(categories => (
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



// export default CategoryTable;