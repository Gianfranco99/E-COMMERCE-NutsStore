import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getOrder} from '../../redux/actions/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

export default function Order (props) {
  const orden = useSelector((state) => state.order)
  const dispatch = useDispatch();
  const [order, setOrder] = useState(orden) 
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);  
  const [editing, setEditing] = useState(false);
  const [orderSeleccionado, setOrderSeleccionado] =useState({
    orderId: '',
    orderPrice: '',
    orderProducts: '',
    status: ''
  });

  useEffect(()=>{
      dispatch(getOrder())
    },[])
  console.log(order)
  const handleChange=e=>{
    const {name, value}=e.target;
    setOrderSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  } 
  const seleccionarOrder = (element, caso)=>{
    setOrderSeleccionado(element);
    (caso === 'Editar')?setModalEditar(true):setModalEliminar(true)
    }
  const editar = () => {
    var orderNueva = order;
    orderNueva.map(orden =>{
      if(orden.id === orderSeleccionado.id){
        orden.status=orderSeleccionado.status;
      }
    })
      setOrder(orderNueva);
      setModalEditar(false);
  }

  const eliminar = () =>{
    setOrder(order.filter(order=>order.id!==orderSeleccionado.id));
    setModalEliminar(false)
  }
   
  return (
    <div>
      <h2>Tabla Order</h2>
    <br/>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>orderId</th>
          <th>orderPrice</th>
          <th>orderProducts</th>
          <th>orderStatus</th>
          <th>Editar/Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {orden.map(c =>(
          <tr>
            <td>{c.id}</td>                
            <td>{c.price}</td>
            <td>{c.orderProducts[0].name}</td>
            <td>{c.status}</td>
            <td>
              <button className="btn btn-primary" onClick={()=>seleccionarOrder(c, 'Editar')}>Editar</button> {"  "}
              <button className="btn btn-danger" onClick={()=>seleccionarOrder(c, 'Eliminar')}>Eliminar</button>
            </td>
          </tr>     
          ))
        }
      </tbody>
    </table>

    <Modal isOpen={modalEditar}>
      <ModalHeader>
        <div>
          <h3>Editar Order</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="form-group">        
          <label>Estado</label>
          <input
            className="form-control"
            type="text"
            name="status"
            value={orderSeleccionado && orderSeleccionado.status}
            onChange={handleChange}
          />
          <br />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={()=>editar()}>
          Actualizar
        </button>
        <button
          className="btn btn-danger"
          onClick={()=>setModalEditar(false)}
        >
          Cancelar
        </button>
      </ModalFooter>
    </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Seguro que queres eliminar la orden? {orderSeleccionado && order.id}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>      
      </div>
        
    )
}