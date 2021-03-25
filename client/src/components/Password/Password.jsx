import React from "react"
import style from "./Password.css"
import {useState} from "react"
import newPassword from "./newPassword"
import { useHistory } from "react-router-dom";

export default function Password(){
  let history = useHistory();
  const newPassword = (data, token) =>{
    var myHeaders = new Headers();
    myHeaders.append("token", token)
    myHeaders.append("Content-Type", "application/json");
console.log(data.password)
var raw = JSON.stringify({"password":data.password,"email":data.email});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3001/user", requestOptions)
  .then(response => {
  response.json();
  history.push("/micuenta");})
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
}
    const [input, setInput] = useState({
      name: "",
      email: "",
      password: "",
    });
  
    const handleInputChange = function (e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    };
    
    var queryToken = window.location.search;
    queryToken = queryToken.slice(1, queryToken.length);

    return (

        <div className="Background-container">
          <div className="Background">
            <div className="Registro-container">
              <h3 className="titulo-registrarse">Forgot Password</h3>
              {/* <label className="titulo">
                Nombre:
                <br></br>
                <input
                  className="input"
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="name"
                  value={input.name}
                  onChange={handleInputChange}
                />
              </label> */}
              <p></p>
              <label className="titulo">
                Correo electronico:
                <br></br>
                <input
                  className="input"
                  type="text"
                  placeholder="Ingrese su correo electronico"
                  name="email"
                  value={input.email}
                  onChange={handleInputChange}
                />
              </label>
              <p></p>
              <label className="titulo">
              Nueva Contraseña:
                <br></br>
                <input
                  className="input"
                  type="password"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
                />
              </label>
              <p></p>
              <button  onClick= {()=> newPassword(input, queryToken)} className="boton-registrarse">
               Cambiar Contraseña
              </button>
            </div>
          </div>
        </div>
      );
    }
