import React, { createContext, useEffect } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext({ isadmin: false });

const AuthProvider = ({ children }) => {
  const allContexts = useFirebase();
  const user = allContexts.user;
  // console.log(user);
  useEffect(() => {
    if (user) {
    }
  }, [user]);
  return (
    <AuthContext.Provider value={{ ...allContexts, isadmin: false }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
