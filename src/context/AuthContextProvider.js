import React, { createContext, useContext, useEffect, useState } from "react";
import fire from "../fire";
import { useNavigate } from "react-router-dom";
const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const navigate = useNavigate();
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  //! REGISTER
  const handleRegister = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => setHasAccount(!hasAccount))
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
          default:
            break;
        }
      });
    clearInputs();
    clearErrors();
  };

  //! LOGIN
  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/"))
      .catch((error) => {
        switch (error.code) {
          case "auth/user-disabled":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(Object.values(error.code));
            break;
          case "auth/wrong-password":
            setPasswordError(Object.values(error.code.message));
            break;
          default:
            break;
        }
      });
    clearInputs();
    clearErrors();
  };
  //! LOGOUT
  const handleLogOut = () => {
    fire.auth().signOut();
  };
  // ? authListener - вызывается 1 раз при монтировании компонента
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  const values = {
    email,
    password,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    setEmailError,
    setPasswordError,
    user,
    setUser,
    handleRegister,
    handleLogin,
    handleLogOut,
    authListener,
    hasAccount,
    setHasAccount,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;

// ? createUserWithEmailAndPassword - принимает 2 параметра: 1) состояние email и 2) состояние password
// валидация - ловля ошибок
// ? Object.values - вытаскивает значение
