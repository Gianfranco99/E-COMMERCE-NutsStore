import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Admin2 from "../AddCategory/Admin2";
import "./DashboardAdmin.css";

function DashboardAdmin() {
  const { replace, push } = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="banner-admin">
        <h2 className="titulo-admin">Admin Dashboard</h2>
      </div>
      <div className="tabla-pedidos-admin">
        <h2 className="titulo-tabla-pedidos">Tabla de pedidos</h2>
      </div>
      <div className="admin-botones">
        <Link to="/admin2">
          <button className="boton-admin">Usuarios</button>
        </Link>
        <Link to="/admin">
          <button className="boton-admin">Agregar nuevo producto</button>
        </Link>
        <Link to="/admin2">
          <button className="boton-admin">Agregar nueva categoria</button>
        </Link>
      </div>
      <div className="separador-admin">
        <button
          className="boton-admin-logout"
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
    </div>
  );
}

export default DashboardAdmin;
