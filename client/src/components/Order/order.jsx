import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getOrder} from '../../redux/actions/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
//modales de prueba
//npn i bootstrap reactstrap
//
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
//link de modales de reacstrap de prueba
//https://reactstrap.github.io/components/modals/

export default function Order (props) {

    const dispatch = useDispatch();
    const order = useSelector((state) => state.order)
    useEffect(()=>{
      dispatch(getOrder())
    },[])
    console.log(order)
    const [orderdata, setOrder] = useState(order)
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);

    const [orderSeleccionado, setOrderSeleccionado] =useState({
      orderId: '',
      orderPrice: '',
      productName: '',
      productCategory: '',
      status: '',
    });

    const seleccionarOrder = (element, caso)=>{
      setOrderSeleccionado(element);
      (caso === 'Editar')?setModalEditar(true):setModalEliminar(true)
    }

    const handleChange = e => {
      const {name, value} = e.target;
      setOrderSeleccionado((state)=> ({
        ...state,
        [name]:value
      }));
    }

    const editar = () => {
      var orderNueva = orderdata;
      orderNueva.map(orden =>{
        if(orden.id === orderSeleccionado.id){
          orden.status=orderSeleccionado.status;
        }
      })
      setOrder(orderNueva);
      setModalEditar(false);
    }

    const eliminar = () =>{
      setOrder(orderdata.filter(order=>order.id!==orderSeleccionado.id));
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
              <th>productName</th>
              <th>productCategory</th>
              <th>orderStatus</th>
              <th>Editar/Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {order.map(c =>(
              <tr>
                <td>{c.id}</td>                
                <td>{c.price}</td>
                <td>{c.orderProducts[0].name}</td>
                <td>{c.orderProducts[0].category}</td>
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