import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../../redux/actions/actions';
import './ReviewTable.css';
import qualify0  from '../../assets/qualify0.png';
import qualify1  from '../../assets/qualify1.png';
import qualify2  from '../../assets/qualify2.png';
import qualify3  from '../../assets/qualify3.png';
import qualify4  from '../../assets/qualify4.png';
import qualify5  from '../../assets/qualify5.png';

const ReviewTable = ({id}) => {
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews);
    const user = useSelector((state) => state.user);
    const idUser = user.id;

    const deleteReview = (idReview) => {
        var raw = "";
    
        var requestOptions = {
          method: 'DELETE',
          body: raw,
          redirect: 'follow'
        };
    
        fetch(`http://localhost:3001/products/${id}/review/${idReview}`, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

          window.location.reload();
          
      }

      const short = (props) => {
        return props.slice(2, 10);
      };


    useEffect(()=>{
        dispatch(getReviews(id))
        },[])
        
    return (
        <table className="table-container">
            <thead>
            <tr className="table-tittle">
                <th>Usuario</th>
                <th>Calificación</th>
                <th>Comentario</th>
                <th>Fecha</th>
                <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                {
                    reviews.length > 0 ?
                    reviews.map(review => (
                        <tr className="with-coments" key= {review.id}>
                            <div className="name"><td>{review.user.name}</td></div>
                            <div className="qualify-img"><td>{review.qualify === 0 ? 
                            <img clasName="qualify"src={qualify0} alt="qualify 0"/> 
                            : review.qualify === 1 ? 
                            <img clasName="qualify"src={qualify1} alt="qualify 1"/>
                            : review.qualify === 2 ? 
                            <img clasName="qualify"src={qualify2} alt="qualify 2"/> 
                            : review.qualify === 3 ? 
                            <img clasName="qualify"src={qualify3} alt="qualify 3"/> 
                            : review.qualify === 4 ? 
                            <img clasName="qualify"src={qualify4} alt="qualify 4"/> 
                            : <img clasName="qualify"src={qualify5} alt="qualify 5" />
                            }
                            </td></div>
                            <div className="description"><td>{review.description}</td></div>
                            <div className="fecha"><td>{short(review.createdAt)}</td></div>


                            { review.userId === idUser ? <td>
                            <button 
                                className="register"
                               onClick={() => {deleteReview(review.id)}}
                            >
                                Borrar
                            </button>
                            </td>
                            :
                            <div className="register"><td>
                            <a 
                                href="http://localhost:3000/micuenta"
                            >
                                Ingresa
                            </a>
                            </td></div> }
                        </tr>
                    )) : (
                        <tr>
                            <td className="noComent" colSpan={3}>Sin comentarios</td>
                        </tr>
                    )
                }
            
            </tbody>
        </table>
    )
}



export default ReviewTable;