import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({go, children, ...rest}) => {
  return (
    <>
      {go ? <Route {...rest}>{children}</Route> : <Redirect to='/'/>}
    </>
    );
}

export default PrivateRoute;