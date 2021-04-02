import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect, useSelector } from "react-redux";

const AuthRoute = ({ component: Component, ...rest }) => {
  const admin= useSelector(state => state.auth.user.isAdmin)
  console.log(admin,"admon")
  return (
    <Route
      {...rest} 
      render={props =>
        rest.loggedAdmin ? (
          <Component {...props} />
        ) : (
          
          <Redirect
          to={{
            state: { from: props.location },
          }}
        />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    loggedAdmin: state.user.isAdmin
  };
};
export default connect(mapStateToProps)(AuthRoute);