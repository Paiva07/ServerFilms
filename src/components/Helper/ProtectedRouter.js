import React from 'react';
import { Navigate } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';

const ProtectedRoute = ({ children }) => {
  const { approve } = React.useContext(GlobalContext);
  return approve ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
