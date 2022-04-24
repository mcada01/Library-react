import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {isLogin} from '../middlewares/auth';

const PublicRoute = ({
  component: Component,
  restricted,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isLogin() && restricted ? (
        <Redirect to="/generate" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PublicRoute;
