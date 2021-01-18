import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Carrito.css";
import imageneliminar from "../../assets/cruz.png";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Product/Product";
import {
  addProductCart,
  cleanCart,
  removeProductFromCart,
  removeProductsFromCart,
} from "../../redux/actions/actions";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";


function Carrito() {
const carrito = useSelector(state => state.productCart)
const userId = useSelector ( state => state.user.id)
console.log('este es el carrito', carrito)
const cantidad = useSelector(state => state.count)
const dispatch = useDispatch()
let contador = 0;
var axios = require('axios');
var history = useHistory();

const getOrder = () =>{
  const order = {"price":price,"orderProducts":carrito ,"quantity":quantity,"status":"creada"}; 

  var config = {
    method: 'post',
    url: `http://localhost:3001/user/${userId}/order`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : order
  };
  console.log(config)
  
  axios(config)
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  });
  
  history.push('/mercadopago/pagos')
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

if(carrito.length >0){
  var price = 
  carrito.map(p => p.payload.price * p.quantity)
         .reduce((a, b) => a + b, 0)
         
var quantity = 
 carrito.map(p => p.quantity)
         .reduce(reducer)
        console.log(quantity)
      }


  return (
    
    <Fragment>
      <div className="container-cart">

      {carrito.length === 0 ? (
        <Row className="justify-content-center">
          <h4>No hay productos en el carrito</h4>
        </Row>
      ) : (
        <Fragment>
          <div className="card shopping-cart">
            <div className="card-header  text-primary">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
              Shopping cart
              <div className="clearfix"></div>
            </div>
            <div className="card-body carro">
              {carrito.map(({ payload, quantity }, i) => (
                <Fragment key={i}>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-2 text-center">
                      <Link to={`/productDetail/${payload.id}`}>
                        <img
                          className="img-responsive cart-img-obj-fit"
                          src={payload.image}
                          alt="prewiew"
                          width="120"
                          height="80"
                          />
                      </Link>
                    </div>
                    <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                      <h4 className="product-name">{payload.name}</h4>
                      <p>{payload.description}</p>
                    </div>
                    <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                      <div
                        className="col-3 col-sm-3 col-md-6 text-md-right"
                        style={{ paddingTop: 5 }}
                        >
                        <h5>
                          <strong>${payload.price.toFixed(2)}</strong>
                        </h5>
                      </div>
                      <div className="col-4 col-sm-4 col-md-4">
                        <div className="quantity">
                          <button
                            onClick={() => dispatch(addProductCart(payload))} //() => dispatch(addProductCart(props))
                            className="plus"
                            >
                            +
                          </button>
                          <span className="quantity-number">{quantity}</span>
                          <button
                            onClick={() =>
                              dispatch(removeProductFromCart(payload))
                            }
                            className="minus"
                            >
                            -
                          </button>
                        </div>
                      </div>
                      <div className="col-2 col-sm-2 col-md-2 text-right">
                        <button
                          onClick={() =>
                            dispatch(removeProductsFromCart(payload))
                          }
                          type="button"
                          className="btn btn-outline-danger btn-xs"
                          >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              ))}

              <div className="pull-right">
                <Link to={"/catalogo"}>
                  <button className="btn btn-outline-primary pull-right">
                    Continuar comprando
                  </button>
                </Link>
                <button
                  onClick={() => dispatch(cleanCart())}
                  className="btn btn-outline-primary pull-right mr-3"
                  >
                  Vaciar carrito
                </button>
              </div>
            </div>
            <div className="card-footer">
              <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="cupone code"
                      />
                  </div>
                  <div className="col-6">
                    <input
                      type="submit"
                      className="btn btn-default"
                      value="Usar cumpón"
                      />
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{ margin: 10 }}>
                <button onClick={getOrder} className="btn btn-primary pull-right">
                  COMPRAR
                </button>
                <div className="pull-right" style={{ margin: 5 }}>
                  Total price:{" "}
                  <b>
                    $
                    { price}
                  </b>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
      </div>
    </Fragment>
  );
}

export default Carrito;
