import React, { useState } from "react";
import "./InicioDeSesion.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

function InicioDeSesion() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };  

  const iniciarsesion = () => {
    console.log(input);
    axios
      .post("http://localhost:3001/auth/login", input)
      .then((res) => {
        console.log(res)
        let {
          data: { user, token },
        } = res;
        window.localStorage.setItem("token", token);
        dispatch({
          type: "SET_LOGIN",
          payload: user,
        });
      })
      .catch((err) => {
        swal({
          title: "Algo salió mal",
          text: "Tu email o contraseña son incorrectos",
          icon: "error",
        });
      });
  };
  return (
    <div className="Background-container">
      <div className="Background">
        <div className="Login-container">
          <h3 className="titulo-iniciarsesion">Iniciar sesión</h3>
          <label className="titulo">
            Correo Electronico:
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
            Contraseña:
            <br></br>
            <input
              className="input"
              type="password"
              placeholder="Ingrese su contraseña"
              name="password"
              value={input.password}
              onKeyPress={(e) => e.key === "Enter" && iniciarsesion()}
              onChange={handleInputChange}
            />
          </label>
          <p></p>
          <button onClick={iniciarsesion} className="boton-ingresar">
            Ingresar
          </button>
          <h5 className="titulo2">Si aún no tenes una cuenta, </h5>
          <a className="titulo3" href="/registro">
            registrate acá            
          </a>
          <a href="/registro"><small>¿Has olvidado tu contraseña?</small></a>
          {/* <h6 className="titulo2">¿Has olvidado tu contraseña?</h6> */}
          {/* <a className="titulo3" href="/registro"> */}
        </div>
      </div>
    </div>
  );
};

export default InicioDeSesion;
