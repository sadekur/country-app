import React from 'react'
import { Navigate } from 'react-router-dom';

const Private = ({isLogedIn,children}) => {
    if (!isLogedIn) {
        return (
            // <Navigate to="/" replace />
        )
        
    }
  return children;
}

export default Private;
