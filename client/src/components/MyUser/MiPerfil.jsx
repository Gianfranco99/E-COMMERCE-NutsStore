import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../MyUser/MiPerfil.css";

function MiPerfil() {
  const { replace, push } = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="banner-guest">
        <h2 className="titulo-guest">Perfil del guest</h2>
      </div>
      <button
        className="boton-guest"
        onClick={() => {
          dispatch({
            type: "SET_LOGOUT",
          });
          window.localStorage.removeItem("token");
          replace("/signin");
          push("/login");
        }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default MiPerfil;
