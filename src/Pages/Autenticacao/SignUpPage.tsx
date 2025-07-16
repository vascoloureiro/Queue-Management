import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './CSS/login.css';

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthContext.tsx';

export default function SignUpPage() {
    
    const navigate = useNavigate();
    const [tryRegister, setTryRegister] = useState<boolean>(false);
    
    const Auth = useContext(AuthContext)
 
    useEffect(() => {
            if (Auth?.password_reg === Auth?.confirmPassword_reg) {
                Auth?.setMakeRegister(true);
                setTryRegister(!tryRegister)
                
            }
      
    }, [Auth?.password_reg, Auth?.confirmPassword_reg, tryRegister])



    return (<>
       <div className='logo-div'>
            <img src="/resources/logo.png" className="img" />
        </div>
        <div className='login-main-container'>
            <div className='register-right-cont'>
                <div className='title-login-page'>
                    Sign in to your account
                </div>
                <div className='opts-container-css'>
                    <button className='btn-opts-login'
                        onClick={() => navigate('/editor')}
                    ><FcGoogle size={'clamp(1rem, 2vw, 1.7rem)'} />Editor</button>
                    <button className='btn-opts-login'
                        onClick={() => navigate('/arquivos')}
                    ><FaApple size={'clamp(1rem, 2vw, 1.7rem)'} /> Apple</button>
                </div>

                Ou

                <div className='opt-email-login'>

                    <input className="input-email" type='email' placeholder='Nome Utilizador'
                        onChange={(e) => Auth?.setNomeUtilizador(e.target.value)}
                    />
                    <input className="input-email" type='email' placeholder='Email'
                        onChange={(e) => Auth?.setEmail_Reg(e.target.value)}
                    />
                    <input className="input-email" type='password' placeholder='Password'
                        onChange={(e) => Auth?.setPassword_reg(e.target.value)}
                    />
                    <input className="input-email" type='password' placeholder='Confirmar Password'
                        onChange={(e) => Auth?.setConfirmPassword_reg(e.target.value)}
                    />
                </div>

                <div className='bottom-signUp-container'>
                    <button className='btn-login'
                        onClick={() => setTryRegister(true)}
                    >Registar</button>
                    <span className='span-login-container'>
                            Já possui Conta?
                            <button className='btn-redirect-auth'
                                    onClick={() => navigate('/login')}
                            >Faça login aqui</button>
                        </span>
                </div>
            </div>
        </div>

    </>);
}
