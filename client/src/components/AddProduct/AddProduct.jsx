import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import FileBase64 from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import {getCategory} from "../../redux/actions/actions";
import {getProducts} from '../../redux/actions/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import style from "./AddProduct.css"
const AddProduct = (props) => {
  const [Fotos, setFotos] = useState([]);
  const category = useSelector((state) => state.categories)
  const dispatch = useDispatch();
  const productos = useSelector((state)=> state.products)
  const [products, setProducts] = useState(productos);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [editing, setEditing] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState({
    id: null,
    name: "",
    description: "",
    stock: "",
    price: "",
    category: "",
    image: ""
  });
  useEffect(()=>{
    dispatch(getCategory())
    },[])
  useEffect(() => {
      dispatch(getProducts());
   }, [])
   //modal
  const seleccionarProducto=(elemento, caso)=>{
    setProductoSeleccionado(elemento);
    (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
      }
      const handleChange=e=>{
        const {name, value}=e.target;
        setProductoSeleccionado((prevState)=>({
          ...prevState,
          [name]: value
        }));
      }    
      // const handlerphoto = (files) => {  
      //   let photos64 = files.map((el) => el.base64);
      //   setFotos(photos64);
      // };
      // const onSubmit = (data, e) => {
      //   e.preventDefault();
      //   addProductos({ ...data, image: Fotos });
      //   console.log("paso", data)
      //   //limpiar campos
      //   e.target.reset();
        
      // };
//agregar productos sin fotos aun
  const addProductos = () =>{
    var productoadd = productoSeleccionado
    console.log("otravezSopa",productoadd)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"name":productoadd.name,"description":productoadd.description,"category":productoadd.category,"price":productoadd.price,"stock":productoadd.stock,"image":productoadd.image});
    console.log("todomenoscategory",raw)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/products", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  } 
   
   const insertar =()=>{
    var valorInsertar=productoSeleccionado;
   // valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = productos;
    dataNueva.push(valorInsertar);
    setProducts(dataNueva);
    setModalInsertar(false);
    addProductos()
    window.location.replace("/addProduct");
  }
// termina bloque de agregar product
//edit 
  const updateProduct = (id, producto) => {  
    var productoPost=productoSeleccionado
    setEditing(false);
    var id=productoPost.id;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"id":productoPost.id,"name":productoPost.name,"description":productoPost.description,"category":productoPost.category,"price":productoPost.price,"stock":productoPost.stock});
    console.log("put", raw)
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:3001/products/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));    
  };
    //modal
    const editar=()=>{
      var dataNueva=productos;
      dataNueva.map(p=>{
        if(p.id===productoSeleccionado.id){
          p.name=productoSeleccionado.name;
          p.description=productoSeleccionado.description;
          p.price=productoSeleccionado.price;
          p.stock=productoSeleccionado.stock;
          p.category=productoSeleccionado.category;
        }
      });
      setProducts(productos);
      setModalEditar(false);
      updateProduct()
      window.location.replace("/addProduct");
    }
//termina bloque de edit
//delete
  const deleteProduct = (id,e) => {
    var raw = "";
    var prod=productoSeleccionado
    var id = prod.id
    console.log("eliminado",prod.id)
    var requestOptions = {
    method: 'DELETE',
    body: raw,
    redirect: 'follow'
    };
    
    fetch(`http://localhost:3001/products/${id}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  };
  //modal
  const eliminar =()=>{
    setProducts(products.filter(p=>p.id!==productoSeleccionado.id));
    setModalEliminar(false);
    deleteProduct()
    window.location.replace("/addProduct");
  }
//termina el delete
  //modal
//modal
  const abrirModalInsertar=()=>{
    setProductoSeleccionado(null);
    setModalInsertar(true);
  }
  return (
    <div className="container-add-product">
      <h2>Producto</h2>
      <br />
    <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>stock</th>
            <th>category</th>
            <th>image</th>
            <th>Editar/Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(element=>(
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.description}</td>
              <td>{element.price}</td>
              <td>{element.stock}</td>
              <td>{element.category}</td>
              <td>{element.image}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarProducto(element, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarProducto(element, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Producto</h3>
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
              value={productoSeleccionado && productoSeleccionado.id}
            />
            <br />
            <label>name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={productoSeleccionado && productoSeleccionado.name}
              onChange={handleChange}
            />
            <br />
            <label>description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={productoSeleccionado && productoSeleccionado.description}
              onChange={handleChange}
            />
            <br />
            <label>price</label>
            <input
              className="form-control"
              type="text"
              name="price"
              value={productoSeleccionado && productoSeleccionado.price}
              onChange={handleChange}
            />
            <br />
            <label>stock</label>
            <input
              className="form-control"
              type="text"
              name="stock"
              value={productoSeleccionado && productoSeleccionado.stock}
              onChange={handleChange}
            />
            <br />
            <label>category</label>
            <select name="category" onChange={handleChange}>
              {category && category.map(c =>
                <option value = {c.name}>{c.name}</option>
              )}
            </select>
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
          Estás Seguro que deseas eliminar el producto {productoSeleccionado && productoSeleccionado.name}
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
            <h3>Insertar producto</h3>
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
              value={productoSeleccionado ? productoSeleccionado.name: ''}
              onChange={handleChange}/>
            <br />
            <label>description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={productoSeleccionado ? productoSeleccionado.description: ''}
              onChange={handleChange}
              />
            <br />
            <label>price</label>
            <input
              className="form-control"
              type="text"
              name="price"
              value={productoSeleccionado ? productoSeleccionado.price: ''}
              onChange={handleChange}/>
            <br />
            <label>stock</label>
            <input
              className="form-control"
              type="text"
              name="stock"
              value={productoSeleccionado ? productoSeleccionado.stock: ''}
              onChange={handleChange}/>
            <br />
            <label>category</label>
            <select name="category" onChange={handleChange}>        
              {category.map(c => <option value = {c.name} >{c.name}</option>)}
            </select>
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
  );
}
export default AddProduct;