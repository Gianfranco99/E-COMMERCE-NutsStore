import React, { useState } from 'react';
import "./Micuenta.css"
import axios from 'axios'

function MiCuenta() {

const [input, setInput] = useState({
  email: '',
  password: '',
});

const handleInputChange = function(e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  });
  }

const iniciarsesion = () => {
  console.log(input);
  axios.post('http://localhost:3001/registrarse', input)
    .then(res => console.log(res))
}

return (
  <div className= "Background-container">
    <div className= "Background">     
      <div className="Login-container">
        <h3 className= "titulo-iniciarsesion">Iniciar sesión</h3> 
        <label className= "titulo"> 
        Correo Electronico:
        <br></br>
        <input className="input" type="text" 
               placeholder= "Ingrese su correo electronico" 
               name="email" 
               value={input.email} 
               onChange = {handleInputChange}/>
        </label>
        <p></p>
        <label className= "titulo"> 
        Contraseña:
        <br></br>
        <input className= "input" type="password" 
               placeholder= "Ingrese su contraseña" 
               name="password" 
               value={input.password} 
               onChange = {handleInputChange}/>
        </label>
        <p></p>
        <button onClick={iniciarsesion} className= "boton-ingresar">Ingresar</button>
        <h5 className= "titulo2">Si aún no tenes una cuenta, </h5>
        <a className= "titulo3" href="/registro">registrate acá</a>
    </div>
  </div>
</div>
  );
}

export default MiCuenta;