import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InicioDeSesion from "../Login/InicioDeSesion";
import DashboardAdmin from "./DashboardAdmin";
import MiPerfil from "./MiPerfil";

function MiCuenta() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Fragment>
      {user.isAdmin  ? 
      (<DashboardAdmin /> ):(
        <MiPerfil />
      )}
    </Fragment>
  );
}

export default MiCuenta;
