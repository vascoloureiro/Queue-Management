import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Context
import { AuthContext } from '../../Context/AuthContext';

// Styles
import './CSS/login.css'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function LoginPage() {

    const navigate = useNavigate();
    const id_user = localStorage.getItem("user_id")
    const {
        setMakeLogin,
        setEmail, setPassword,
        isAuthenticated, setIsAuthenticated,
        authLog, setAuthLog,
        loginError, setLoginError,
    } = useContext(AuthContext);


    useEffect(() => {

        if (isAuthenticated) {
            navigate(`/dashboard/user/${id_user}`);
            setAuthLog('');
            setLoginError(false);

        } else if (authLog !== '') {

            alert(authLog);
            setAuthLog('');
            setLoginError(true);
        }

    }, [isAuthenticated]);

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
                            className={loginError ? ('input-error') : ('input-email')}
                            type='email'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setLoginError(false)}
                        />
                        <input
                            className={loginError ? ('input-error') : ('input-email')}
                            type='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setLoginError(false)}
                        />
                        {loginError && <p className='error-warining'>Credenciais Inválidas</p>}
                    </div>

                    <div className='bottom-signUp-container'>
                        <button className='btn-login' onClick={() => setMakeLogin(true)}>
                            Login
                        </button>
                        <span className='span-login-container'>
                            Don´t have an account yet?
                            <button className='btn-redirect-auth'
                                onClick={() => navigate('/registo')}
                            >Sign up here</button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
