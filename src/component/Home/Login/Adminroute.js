import React from 'react';
import { Spinner } from 'react-bootstrap';

import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Adminroute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="warning" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default Adminroute;
