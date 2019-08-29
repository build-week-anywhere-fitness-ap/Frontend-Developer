import React from 'react'
import { Route, Redirect } from 'react-router';

//Potential Issues: 
//We have a Client Login and a Trainer Login, So the redirect here may need to be changed

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
);

export default PrivateRoute;