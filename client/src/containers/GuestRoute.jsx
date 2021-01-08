import { Route, Redirect } from "react-router-dom";
import React from "react";

const GuestRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !rest.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect //si es admin, mandarlo a la ruta de admin
            to={{
              pathname: "/admin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default GuestRoute;
