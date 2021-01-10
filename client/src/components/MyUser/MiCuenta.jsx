import React, { useState } from "react";
import { useSelector } from "react-redux";
import InicioDeSesion from "../Login/InicioDeSesion";
import DashboardAdmin from "./DashboardAdmin";
import MiPerfil from "./MiPerfil";

function MiCuenta() {
  const loggedIn = useSelector((state) => state.loggedIn);
  const user = useSelector((state) => state.user);

  return (
    <>
      {loggedIn && user.isAdmin && <DashboardAdmin />}
      {loggedIn && !user.isAdmin && <MiPerfil />}
      {!loggedIn && <InicioDeSesion />}
    </>
  );
}

export default MiCuenta;