import { useState, useEffect } from 'react';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import initializeFirebase from '../component/Home/Login/Login/Firebase/firebase.init';
const googleProvider = new GoogleAuthProvider();
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({ isadmin: false });
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name };

        setUser({ isadmin: false });
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        history.push('/');
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
        // console.log(userCredential);
      })

      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // googlesignin
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        history.push('/');
        setAuthError('');
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetch('http://localhost:5000/isadmin', {
          method: 'POST',
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        setUser({ ...user });
        // console.log(user);
      } else {
        setUser({ isuser: false });
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logout,
    signInWithGoogle,
  };
};

export default useFirebase;
