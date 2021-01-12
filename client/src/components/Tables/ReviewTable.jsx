import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../../redux/actions/actions';

const ReviewTable = (props) => {
    const dispatch = useDispatch();
    console.log(props)

    const review = useSelector(state => state.reviews);

    const deleteReview = (id) => {
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


    useEffect(()=>{
        dispatch(getReviews())
        },[])

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
                    props.length > 0 ?
                    props.map(review => (
                        <tr key= {review.id}>
                            <td>{review.qualify}</td>
                            <td>{review.comentario}</td>
                            <td>
                            <button 
                                className="button muted-button"
                                onClick={() => {deleteReview(props.id)}}
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