import React, {
  createContext,
  useState,
  useEffect,
  ReactNode
} from 'react';

import { AuthContextType } from './types/AuthContextTypes.ts';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  
  const url = 'http://localhost:3001';

  // Estados
  const [makeLogin, setMakeLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [makeRegister, setMakeRegister] = useState(false);
  const [email_reg, setEmail_Reg] = useState('');
  const [password_reg, setPassword_reg] = useState('');
  const [confirmPassword_reg, setConfirmPassword_reg] = useState('');
  const [nome_utilizador, setNomeUtilizador] = useState('');

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [authLog, setAuthLog] = useState('');

  const doLogin = async (email: string, password: string) => {
    if (!email || !password) return;

    try {
      const response = await fetch(`${url}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email_user: email,
          password_user: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setLoginError(false);
        setAuthLog("Login bem-sucedido");
      } else {
        setLoginError(true);
        setAuthLog("Credenciais inválidas");
        console.error("Erro na autenticação:", data.message);
      }
    } catch (ex) {
      setLoginError(true);
      setAuthLog("Erro na conexão");
      console.error("Login erro: ", ex);
    }
  };

  const doRegister = async (nome_utilizador: string, email: string, password: string) => {
    if (!email || !password || !nome_utilizador) return;

    try {
      const response = await fetch(`${url}/api/v1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name_user: nome_utilizador,
          email_user: email,
          password_user: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setAuthLog("Registo efetuado com sucesso");
      } else {
        setAuthLog("Erro no registo");
        console.error("Erro no registo:", data.message);
      }
    } catch (ex) {
      setAuthLog("Erro na conexão");
      console.error("Erro no registo: ", ex);
    }
  };

  useEffect(() => {
    if (makeLogin) {
      doLogin(email, password);
      setMakeLogin(false);
    }
  }, [email, password, makeLogin]);

  useEffect(() => {
    if (makeRegister) {
      doRegister(nome_utilizador, email_reg, password_reg);
      setMakeRegister(false);
    }
  }, [makeRegister, nome_utilizador, email_reg, password_reg]);

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
      isAuthenticated, setIsAuthenticated,
      loginError, setLoginError,
      authLog, setAuthLog,
      doLogin,
      doRegister
    }}>
      {children}
    </AuthContext.Provider>
  );
};
