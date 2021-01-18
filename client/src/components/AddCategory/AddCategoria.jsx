import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getCategory} from "../../redux/actions/actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import styleAddCategoria from "./AddCategory.css"
const AddCategory = (props) => {
  const categorias = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [category, setCategory] = useState(categorias);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [editing, setEditing] = useState(false);
  const [categoriaSeleccionado, setCategoriaSeleccionado] = useState({
     id: null,
     name: "",
     description: "",
   });
   useEffect(()=>{
    dispatch(getCategory())
    },[])
    //modal
  const seleccionarCategoria=(elemento, caso)=>{
      setCategoriaSeleccionado(elemento);
      (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
    }
  const handleChange=e=>{
    const {name, value}=e.target;
    setCategoriaSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }
  //addCategorie
  const addCategoria = () => {
    var categoriaAdd = categoriaSeleccionado;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"name":categoriaAdd.name,"description":categoriaAdd.description});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/products/category/", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  //modal add
  const insertar =()=>{
    var valorInsertar=categoriaSeleccionado;
   // valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = categorias;
    dataNueva.push(valorInsertar);
    setCategory(dataNueva);
    setModalInsertar(false);
    addCategoria();
    window.location.replace("/addCategoria");
  }
  //edit categoria
  const updateCategory = (id, categorie) => {
    var categoriaPut = categoriaSeleccionado;
    setEditing(false);
    var id = categoriaPut.id
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"name":categoriaPut.name,"description":categoriaPut.description});

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:3001/products/category/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  //modal editar categoria
  const editar = () => {
    var dataNueva = categorias;
    dataNueva.map(c => {
      if(c.id === categoriaSeleccionado.id){
        c.name = categoriaSeleccionado.name;
        c.description = categoriaSeleccionado.description;
      }
    })
    setCategory(categorias);
    setModalEditar(false);
    updateCategory()
    window.location.replace("/addCategoria");
  }
  //delete categoria
  const deleteCategoria = (id, e) => {
    var raw = "";
    var categoriaDelete = categoriaSeleccionado;
    var id = categoriaDelete.id
    var requestOptions = {
      method: 'DELETE',
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:3001/products/category/${id}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
//modal categoria delete
  const eliminar = ()  => {
    setCategory(category.filter(c => c.id !== categoriaSeleccionado.id));
    setModalEliminar(false);
    deleteCategoria();
    window.location.replace("/addCategoria")
  }
//modal
  const abrirModalInsertar =() => {
    setCategoriaSeleccionado(null);
    setModalInsertar(true);
  }
  return (
    <div className="container-add-categoria">
      <h2>Categorias</h2>
      <br />
      <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>
      <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>description</th>
            <th>Editar/Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(element=>(
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.description}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarCategoria(element, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarCategoria(element, 'Eliminar')}>Eliminar</button></td>
            </tr>
            ))
          }
        </tbody>
      </table>
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Categoria</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={categoriaSeleccionado && categoriaSeleccionado.id}
            />
            <br />
            <label>name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={categoriaSeleccionado && categoriaSeleccionado.name}
              onChange={handleChange}
            />
            <br />
            <label>description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={categoriaSeleccionado && categoriaSeleccionado.description}
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
      <Modal isOpen={modalEliminar} >
        <ModalBody >
          Estás Seguro que deseas eliminar la  categoria {categoriaSeleccionado && categoriaSeleccionado.name}
        </ModalBody>
        <ModalFooter >
          <button className="btn btn-danger" onClick={()=>eliminar()} >
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
      <Modal isOpen={modalInsertar}  >
        <ModalHeader>
          <div>
            <h3>Insertar categoria</h3>
          </div>
        </ModalHeader>
        <ModalBody >
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              // value={data[data.length-1].id+1}
          />
            <br />
            <label>name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={categoriaSeleccionado ? categoriaSeleccionado.name: ''}
              onChange={handleChange}/>
            <br />
            <label>description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={categoriaSeleccionado ? categoriaSeleccionado.description: ''}
              onChange={handleChange}
              />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}
          type= "submit">
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AddCategory;