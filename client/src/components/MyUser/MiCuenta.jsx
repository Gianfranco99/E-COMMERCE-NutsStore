import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InicioDeSesion from "../Login/InicioDeSesion";
import DashboardAdmin from "./DashboardAdmin";
import MiPerfil from "./MiPerfil";

function MiCuenta() {
  const user = useSelector((state) => state.auth.user);
  const loggedIn = useSelector((state) => state.auth.loggedIn); 
  return (
    <Fragment>
      { !loggedIn &&
      (
        <InicioDeSesion/>
      )}
      { loggedIn && user.isAdmin  &&
      (
        <DashboardAdmin/>
      )}
      { loggedIn && !user.isAdmin  &&
      (
        <MiPerfil/>
      )}
      
    </Fragment>
  );
}

export default MiCuenta;
