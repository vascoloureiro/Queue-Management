export interface AuthContextType {
  
  // Login
  makeLogin: boolean;
  setMakeLogin: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;

  // SignUp
  makeRegister: boolean;
  setMakeRegister: React.Dispatch<React.SetStateAction<boolean>>;
  email_reg: string;
  setEmail_Reg: React.Dispatch<React.SetStateAction<string>>;
  password_reg: string;
  setPassword_reg: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword_reg: string;
  setConfirmPassword_reg: React.Dispatch<React.SetStateAction<string>>;
  nome_utilizador: string;
  setNomeUtilizador: React.Dispatch<React.SetStateAction<string>>;

  // Autenticação
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  loginError: boolean;
  setLoginError: React.Dispatch<React.SetStateAction<boolean>>;
  authLog: string;
  setAuthLog: React.Dispatch<React.SetStateAction<string>>;

  // Methods
  doLogin: (email: string, password: string) => Promise<void>;
  doRegister: (nome_utilizador: string, email: string, password: string) => Promise<void>;
}
