import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Context

// Styles
import './CSS/login.css'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthContext.tsx';

export default function LoginPage() {

    const navigate = useNavigate();
    const id_user = localStorage.getItem("user_id")
    
    const Auth = useContext(AuthContext);


    useEffect(() => {

        if (Auth?.isAuthenticated) {
            navigate(`/dashboard/user/${id_user}`);
            Auth?.setAuthLog('');
            Auth?.setLoginError(false);

        } else if (Auth?.authLog !== '') {

            alert(Auth?.authLog);
            Auth?.setAuthLog('');
            Auth?.setLoginError(true);
        }

    }, [Auth?.isAuthenticated]);

    return (
        <>
            <div className='logo-div'>
                <img src="./resources/logo.png" className="img" />
            </div>
            <div className='login-main-container'>
                <div className='login-right-cont'>
                    <div className='title-login-page'>
                        Sign in to your account
                    </div>
                    <div className='opts-container-css'>
                        <button className='btn-opts-login'
                            onClick={() => navigate('/editor')}
                        >
                            <FcGoogle size={'clamp(1rem, 2vw, 1.7rem)'} />
                            Editor
                        </button>

                        <button className='btn-opts-login'
                            onClick={() => navigate('/arquivos')}>
                            <FaApple size={'clamp(1rem, 2vw, 1.7rem)'} />
                            Apple
                        </button>
                    </div>

                    <p>Or</p>

                    <div className='opt-email-login'>
                        <input
                            className={Auth?.loginError ? ('input-error') : ('input-email')}
                            type='email'
                            placeholder='Email'
                            onChange={(e) => Auth?.setEmail(e.target.value)}
                            onFocus={() => Auth?.setLoginError(false)}
                        />
                        <input
                            className={Auth?.loginError ? ('input-error') : ('input-email')}
                            type='password'
                            placeholder='Password'
                            onChange={(e) => Auth?.setPassword(e.target.value)}
                            onFocus={() => Auth?.setLoginError(false)}
                        />
                        {Auth?.loginError && <p className='error-warining'>Credenciais Inválidas</p>}
                    </div>

                    <div className='bottom-signUp-container'>
                        <button className='btn-login' onClick={() => Auth?.setMakeLogin(true)}>
                            Login
                        </button>
                        <span className='span-login-container'>
                            Don´t have an account yet?
                            <button className='btn-redirect-auth'
                                onClick={() => navigate('/signup')}
                            >Sign up here</button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
