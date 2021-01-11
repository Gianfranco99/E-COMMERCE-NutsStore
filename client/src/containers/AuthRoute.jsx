import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

const AuthRoute = ({ component: Component, ...rest }) => {
  console.log('COMPROBADO ESTÁ=', rest.loggedIn)
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/micuenta",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
