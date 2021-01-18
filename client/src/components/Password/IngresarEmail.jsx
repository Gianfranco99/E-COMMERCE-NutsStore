import React from "react"
import style from "./Password.css"
import {useState} from "react"
import { useHistory } from "react-router-dom";

export default function IngresarEmail(){
    let history = useHistory();
    const [input, setInput] = useState({
      email: ""
    });
  
    const handleInputChange = function (e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    };

    function handleClick() {
        alert(!input.email ? "Tiene que ingresar un email" : "Revise su casilla de correo")
        if(input.email){sendEmail()}
        
      }
    
  const sendEmail = ()=>{
    history.push("/")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var email = input.email
    console.log(email)
    var raw = JSON.stringify({"email":email});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    console.log(requestOptions)
    fetch("http://localhost:3001/user/send-email", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

    // var queryToken = window.location.search;
    // queryToken = queryToken.slice(1, queryToken.length);

    return (
        <div className="Background-container">
          <div className="Background">
            <div className="Registro-container">
              <h3 className="titulo-registrarse">Ingresar Email</h3>
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
              <button onClick={ handleClick }  className="boton-registrarse">
               Enviar
              </button>
            </div>
          </div>
        </div>
      );
    }