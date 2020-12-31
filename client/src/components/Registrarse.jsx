import React, { useState } from 'react';
import "./Registrarse.css"
import axios from 'axios'

function Registrarse() {

const [input, setInput] = useState({
  name: '',
  email: '',
  password: '',
});

const handleInputChange = function(e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  });
  }

const registrarse = () => {
  console.log(input);
  axios.post('http://localhost:3001/registrarse', input)
    .then(res => console.log(res))
}

return (
  <div className= "Background-container">
    <div className= "Background">     
      <div className="Registro-container">
        <h3 className= "titulo-registrarse">Registrarse</h3> 
        <label className= "titulo"> 
        Nombre:
        <br></br>
        <input className="input" type="text" 
               placeholder= "Ingrese su nombre" 
               name="nombre" 
               value={input.nombre} 
               onChange = {handleInputChange}/>
        </label>
        <p></p>
        <label className= "titulo"> 
        Correo electronico:
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
        <button onClick={registrarse} className= "boton-registrarse">Registrarse</button>
    </div>
  </div>
</div>
  );
}

export default Registrarse;