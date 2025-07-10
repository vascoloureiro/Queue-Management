import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TbLogout2 } from "react-icons/tb";

import './staff.css'
import { AdminContext } from '../Context/Admin/AdminContext.jsx';
import Afluencia from './Components/Afluencia.jsx';
import Gestao from './Components/Gestao.jsx';
import Relatorios from './Components/Relatorios.jsx';
import Funcionarios from './Components/Funcionarios.jsx';
import Balcoes from './Components/Balcoes.jsx';
import QrCodes from './Components/QrCodes.jsx';

export default function AdmistradorDashBoard() 
{
    const {id} = useParams();

    // Variáveis para guardar o tamanho da tela, para posteriormente ser usado no metodo adequado
    const [isMobile, setIsMobile] = useState(window.innerHeight < 550);
    const [selectedOption, setSelectedOption] = useState('');

    // Variáveis que provém do AdminContext
    const { 
        setIdReceive,
        nameAdmin, weekDay,
    } = useContext(AdminContext)
    
    // Efeito para controlar o conteudo da página conforme o tamanho da tela
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerHeight < 550);
        };

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('rezise', handleResize)
        };

    }, []);
  

    // Efeito para observar o id e defenir o Id do admistrador caso não seja nulo
    useEffect(() => {
        if(id){
            console.log(id)
            setIdReceive(id);
        }
    }, [id, setIdReceive])
    
    // Switch para escolher o componente a ser renderizado na dashboard
    const AdmistradorDashBoard = () => {
        switch (selectedOption) {
            case 'afluencia':
                return <Afluencia/>
            case 'funcionarios':
                return <Funcionarios />
            case 'balcoes':
                return <Balcoes />
            case 'qrcodes':
                return <QrCodes />
            case 'gestao':
                return <Gestao/>
            case 'relatorios':
                return <Relatorios />
            default:
                return <Afluencia />
        }
    }
    return (<>
        {isMobile ? (
            <div>
                <h1>Não Suportado</h1>
            </div>) : (

            <div className="main">
                <div className="side-bar">
                    <div className="ad-title">
                        <span className="sidebar-span"><h2 id="blue">AD:</h2><h2>Queue</h2></span>
                    </div>

                    <div className="sdB-main-opt">
                        <div className="btn-bx">
                            <button onClick={() => setSelectedOption('afluencia')} 
                                    className={`btn-dash ${selectedOption === 'afluencia' ? 'active' : ''} `}>
                                <div className="bx">...</div>
                                <div>Afluência</div>
                            </button>
                        </div>

                        <div className="btn-bx">
                            <button onClick={() => setSelectedOption('funcionarios')} 
                                    className={`btn-dash ${selectedOption === 'funcionarios' ? 'active' : ''}`}>
                                <div className="bx">...</div>
                                <div>Funcionários</div>
                            </button>
                        </div>
                        <div className="btn-bx">
                            <button onClick={() => setSelectedOption('balcoes')} 
                                    className={`btn-dash ${selectedOption === 'balcoes' ? 'active' : ''}`}>
                                <div className="bx">...</div>
                                <div>Balcões</div>
                            </button>
                        </div>
                    </div>

                    <div className="sdB-main-opt">
                        <div className="btn-bx">
                            <button onClick={() => setSelectedOption('qrcodes')}
                                    className={`btn-dash ${selectedOption === 'qrcodes' ? 'active' : ''}`}>
                                <div className="bx">...</div>
                                <div>QrCodes</div>
                            </button>
                        </div>
                        <div className="btn-bx">
                            <button onClick={() => setSelectedOption('relatorios')}
                                    className={`btn-dash ${selectedOption === 'relatorios' ? 'active' : ''}`}>
                                <div className="bx">...</div>
                                <div>Relatórios</div>
                            </button>
                        </div>
                        <div className="btn-bx">
                            <button onClick={() => setSelectedOption('gestao')}
                                    className={`btn-dash ${selectedOption === 'gestao' ? 'active' : ''}`}>
                                <div className="bx">...</div>
                                <div>Gestão</div>
                            </button>
                        </div>

                       
                    </div>
                    <div className='sidebar-footer-log-out ' >
                       <button className="btn-logOut">Sair <TbLogout2 size="25px" /></button>
                    </div>
                </div>

                <div className="dash-main">
                    <div className="dash-menu">
                        <div className="day-week">
                            <h4>{weekDay}</h4>
                        </div>

                        <div className="profile-container">
                            <div className="img-bx">
                                <img  src="/img-profile.png" alt="Image Profile" title='Image Profile'/>
                            </div>
                            <h4>{nameAdmin}</h4>
                        </div>
                    </div>
                    {AdmistradorDashBoard()}
                </div>
            </div>
        )}
    </>);
}