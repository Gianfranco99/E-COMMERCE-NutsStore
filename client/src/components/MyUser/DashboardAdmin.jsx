import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import AddCategoria from "../AddCategory/AddCategoria"

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
        <Link to="/addCategory">
          <button className="boton-admin">Usuarios</button>
        </Link>
        <Link to="/addProduct">
          <button className="boton-admin">Agregar nuevo producto</button>
        </Link>
        <Link to="/addCategory">
          <button className="boton-admin">Agregar nueva categoria</button>
        </Link>
      </div>
      <div className="d-flex justify-content-center mt-4">
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
    </div>
  );
}

export default DashboardAdmin;
