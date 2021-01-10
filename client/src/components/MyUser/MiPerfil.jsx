import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MiPerfil() {
  const { replace, push } = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <h2>perfil del guest</h2>
      <h3>Mis pedidos:</h3>
      <button
        onClick={() => {
          dispatch({
            type: "SET_LOGOUT",
          });
          window.localStorage.removeItem("token");
          replace("/signin");
          push("/micuenta");
        }}
      >
        Cerrar Sesión
      </button>
    </>
  );
}

export default MiPerfil;
