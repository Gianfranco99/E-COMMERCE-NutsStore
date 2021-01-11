import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";

const ReviewTable = (funcion) => {
    const props = useSelector((state) => state);

    return (
        <table>
            <thead>
            <tr>
                <th>Calificación</th>
                <th>Comentario</th>
                <th>Borrar</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.products.length > 0 ?
                    props.products.map(review => (
                        <tr key= {review.id}>
                            <td>{review.qualify}</td>
                            <td>{review.description}</td>
                            <td>
                            <button 
                                className="button muted-button"
                                onClick={() => {funcion.deleteProduct(review.id)}}
                            >
                                Borrar
                            </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>Sin comentarios</td>
                        </tr>
                    )
                }
            
            </tbody>
        </table>
    )
}



export default ReviewTable;