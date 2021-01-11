import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Admin2 from "../AddCategory/Admin2"

function DashboardAdmin() {
  const { replace, push } = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/admin2">  
        <button>admin2</button>
      </Link>
      <h2>Admin Dashboard</h2>
      <h3>Tabla de pedidos/control de usuarios</h3>
      <Link to="/admin2">
        <button>Agregar categoria</button>
      </Link>
      <p></p>
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
    </div>
  );
}

export default DashboardAdmin;
