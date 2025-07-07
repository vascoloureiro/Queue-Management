import React, { createContext, useState, useEffect, useRef } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  //const url = "https://mckapi.onrender.com"
  const url = 'http://localhost:3000';
  
  // Login
  const [makeLogin, setMakeLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Registo
  const [makeRegister, setMakeRegister] = useState(false);
  const [email_reg, setEmail_Reg] = useState('');
  const [password_reg, setPassword_reg] = useState('');
  const [confirmPassword_reg, setConfirmPassword_reg] = useState('');
  const [nome_utilizador, setNomeUtilizador] = useState('');

  // estados de autenticação Login
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [authLog, setAuthLog] = useState('');

  const doLogin = async (email, password) => {
    if (!email || !password) return;

    try {
      const response = await fetch(`${url}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email_utilizador: email,
          password_utilizador: password
        })
      });

      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", data.token[0]);
        localStorage.setItem("user_id", data.token[1]);
        setIsAuthenticated(true);
        setAuthLog("Login efetuado com sucesso!");

      } else {
        setAuthLog("Erro inesperado no login.");
        setLoginError(true);
        console.error("Erro na autenticação:", data.message);
      }
    } catch (ex) {
      setLoginError(true);
      console.error("Login erro: ", ex);
    }
  };


  const doRegister = async(nome_utilizador, email, password) =>{
    if (!email || !password || !nome_utilizador) return;
   
    try {
      const response = await fetch(`${url}/api/v1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome_utilizador: nome_utilizador,
          email_utilizador: email,
          password_utilizador: password
        })
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log("Autenticado");
        setIsAuthenticated(true);
        localStorage.setItem("token", data.token);
      } else {
       
        console.error("Erro no registo:", data.message);
      }

    } catch (ex) {
      console.error("Login erro: ", ex);
    }
  }

  useEffect(() => {
    if (makeLogin) {
      doLogin(email, password);
      setMakeLogin(false);
    }
  }, [email, password, makeLogin])

  useEffect(()=>{
    if(makeRegister)
    {
      console.log(' a ir para o registo. Parm:');
      console.log(nome_utilizador, email_reg, password_reg)
      doRegister(nome_utilizador, email_reg, password_reg);
      setMakeRegister(!makeRegister);
    }
  },[makeRegister, nome_utilizador, email_reg, password_reg]);

  return (
    <AuthContext.Provider value={{
      makeLogin, setMakeLogin,
      email, setEmail,
      password, setPassword,


      makeRegister, setMakeRegister,
      email_reg, setEmail_Reg,
      password_reg, setPassword_reg,
      confirmPassword_reg, setConfirmPassword_reg,
      nome_utilizador, setNomeUtilizador,
      
      // estados de autenticação Login
      isAuthenticated, setIsAuthenticated,
      loginError, setLoginError,
      authLog, setAuthLog
    }}>
      {children}
    </AuthContext.Provider>

  )
}