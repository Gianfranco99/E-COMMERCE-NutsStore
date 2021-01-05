import React from 'react';
import  { useState} from 'react'
import Details from './Details';
import './ProductDetail.css';
import {useDispatch} from 'react-redux'
import {addProductCart, DetailProduct} from '../../redux/actions/actions'

    

export default function ProductDetail (props) {
    const dispatch = useDispatch();

    const products = [
        {
          "_id": "1",
          "title": "almendras",
          "src": [
            "https://images.pexels.com/photos/401213/pexels-photo-401213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/971080/pexels-photo-971080.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/938699/pexels-photo-938699.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ],
          "description": "descripcion cualquiera",
          "content": "para algo va a servir esto",
          "price": 23,
          
          "stock": 1
        }
      ] 
    
    const [imagenes, setimagenes] = useState(products);  
    
      
  
    
  
    const handleTab = index =>{
      setimagenes({index: index})
       const images = this.myRef.current.children;
      for(let i=0; i<images.length; i++){
        images[i].className = images[i].className.replace("active", "");
      }
      images[index].className = "active";
    };
  
    // componentDidMount(){
    //   const {index} = this.state;
    //   this.myRef.current.children[index].className = "active";
    // }
  
    // const {products, index} = this.state;
  
    
      return(
        <div className="container">
          {
            imagenes.map(item =>(
              <div className="details" key={item._id}>
                <div className="big-img">
                  <img src={item.src[0]} alt=""/>
                </div>
  
                <div className="box">
                  <div className="row">
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
                  </div>
  
                  <p>{item.description}</p>
                  <p>{item.content}</p>
  
                  {/* <Details images={item.src} tab={handleTab} /> */}
                  <button className="cart" onClick={() => dispatch(addProductCart(props))}>
                      agregaralCart
                    </button>
  
                </div>
              </div>
            ))
          }
        </div>
      );
    ;
  }
  