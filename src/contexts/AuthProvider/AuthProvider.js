import React, { createContext, useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    isLogin: false,
    name: '',
    email: '',
    img: '',
  });
  const [message, setMessage] = useState({
    error: '',
    success: '',
  });
  const allContexts = useFirebase();
  const user = allContexts.user;
  // console.log(user);
  useEffect(() => {
    if (user) {
    }
  }, [user]);
  return (
    <AuthContext.Provider
      value={{ ...allContexts, userInfo, setUserInfo, message, setMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
