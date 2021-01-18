import React, { useState, useEffect, Fragment, setState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getOrder} from '../../redux/actions/actions';
import styleOrder from './order.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Order (props) {
  const orden = useSelector((state) => state.order)
  const dispatch = useDispatch();
  const [ordenEnCurso, setOrdenEnCurso] = useState()
  const [modal, setModal] = useState(false);
  var primerorder = orden.map((p)=> p.orderProducts)
  console.log("primer",primerorder)
  useEffect(()=>{
    dispatch(getOrder())
  },[])

  //modal
  const {
    className
  } = props;
  const toggle = () => setModal(!modal);
  const usuario = (id) => {
    console.log(id)
    orden.map((d)=> {
      if(d.id === id){
       return  setOrdenEnCurso([d])
      }
    })
    toggle()
  }
  return (
    <div className="container-order">
      <h2>Tabla Order</h2>
      <br/>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>order Id</th>
            <th>price total</th>
            <th>order user</th>
            <th>order status</th>
          </tr>
        </thead>
        <tbody>
          <Fragment>
          {orden.map((c, i )=>(          
            <Fragment key={i}>
              <tr>
                <td>{c.id}</td>                
                <td>{c.price}</td>
                <td><Button id={c.id} color="primary" onClick={(e)=>usuario(parseInt(e.target.id))}>ordenes</Button></td>
                <td>{c.status}</td>
              </tr>     
            </Fragment>
            ))   
          }
          </Fragment>
        </tbody>
      </table>   

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ordenes del usuario</ModalHeader>
        <ModalBody>
        mostrar order
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id de producto</th>
                <th>nombre de producto</th>
                <th>categoria de producto</th>
                <th>precio de producto</th>
              </tr>
              <Fragment>
              {
                !ordenEnCurso?
                (<p>no hay ordenes</p>
                  ):(       
                    <Fragment>         
                      {ordenEnCurso[0].orderProducts.map((p,i)=>
                        <tr key = {i}>                            
                          <td>{p.payload.id}</td>
                          <td>{p.payload.name}</td>
                          <td>{p.payload.description}</td>
                          <td>$ {p.payload.price}</td>
                        </tr>
                      )}
                    </Fragment>
                  )                
              }
              </Fragment>
        
            </thead>
          </table>
        </ModalBody>
      </Modal>
    </div> 
    )
}