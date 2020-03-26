import React from "react";
import { Route, Redirect } from "react-router-dom";
function PrivateRoute({ children,isLoggedIn ,...rest }) {
  console.log(isLoggedIn);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/MyAccount",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
