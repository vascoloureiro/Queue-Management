// React 
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

// Components
import SideBarDash from '../../Components/SideBar.tsx';

/* import { AdminContext } from '../Context/Admin/AdminContext.jsx';
import Afluencia from './Components/Afluencia.jsx';
import Gestao from './Components/Gestao.jsx';
import Relatorios from './Components/Relatorios.jsx';
import Funcionarios from './Components/Funcionarios.jsx';
import Balcoes from './Components/Balcoes.jsx';
import QrCodes from './Components/QrCodes.jsx';
 */

// Styles
import './admin.css'
import { TbTruckDelivery, TbEdit, TbCube, TbChartLine, TbReportAnalytics } from "react-icons/tb";
import {
    HiOutlineCog6Tooth,
    HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiCornerDownRight } from 'react-icons/fi';
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaQrcodeSolid } from 'react-icons/lia';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GoHome, GoPeople } from 'react-icons/go';
import { PiBuilding, PiChartLine } from 'react-icons/pi';
import Statistics from './ModulesAdmin/Afluency/Afluency.tsx';
import TitleDashBoard from '../../Components/TitleDashBoard.tsx';



export default function DashBoardAdminSystem() {

    // Params
    const { id } = useParams();

    // Context

    // States
    const [isMobile, setIsMobile] = useState(window.innerHeight < 550);

    const [openSubDivion, setOpenSubDivion] = useState<boolean>(false);
    const [selectedInfo, setSelectedInfo] = useState<string>('');
    const [selectedComponent, setSelectedComponent] = useState<string>('');


    // const
    // For SideBar
    const topOptions = [

        {
            label: 'Statistisc',
            icon: <PiChartLine size={22} color={selectedComponent === 'afluency' ? 'black' : '#757575'} />,
            onClick: () => {
                setSelectedInfo('afluency')
                setSelectedComponent('Afluency')
            }
        },
        {
            label: 'Manage',
            icon: <GoHome size={22} color={selectedComponent === 'Manage' ? 'black' : '#757575'} />,
            onClick: () => {
                setOpenSubDivion(!openSubDivion)
                setSelectedInfo('manage')
                setSelectedComponent('Manage')
            },
            hasSubOptions: [
                {
                    label: 'Staff',
                    icon: <FiCornerDownRight size={12} color={selectedComponent === 'staff' ? 'black' : '#757575'} />,
                    onClick: () => {
                        setSelectedInfo('staff')
                        setSelectedComponent('Staff')
                    }
                },
                {
                    label: 'QR Codes',
                    icon: <FiCornerDownRight size={12} color={selectedComponent === 'qrcodes' ? 'black' : '#757575'} />,
                    onClick: () => {
                        setSelectedInfo('qrcodes')
                        setSelectedComponent('Qrcodes')
                    }
                },
                {
                    label: 'Counter',
                    icon: <FiCornerDownRight size={12} color={selectedComponent === 'counter' ? 'black' : '#757575'} />,
                    onClick: () => {
                       
                        setSelectedInfo('counter')
                        setSelectedComponent('Counter')
                    },
                },
            ]
        },
        {
            label: 'Reports',
            icon: <TbReportAnalytics size={22} color={selectedComponent === 'reports' ? 'black' : '#757575'} />,
            onClick: () => {
                setSelectedInfo('reports')
                setSelectedComponent('Reports')
            }
        }
    ];

    const lowOptions = [
        {
            label: 'Configuration',
            icon: <HiOutlineCog6Tooth size={22} color={selectedComponent === 'config' ? 'black' : '#757575'} />,
            onClick: () => console.log('config', 'config')
        },
        {
            label: 'Account',
            icon: <IoPersonOutline size={22} color={selectedComponent === 'config' ? 'black' : '#757575'} />,
            onClick: () => console.log('config', 'config')
        },
    ];


    /*
    *   Methods
    */

    // Switch for choosing the component for rendering
    const AdmistradorDashBoard = () => {
        switch (selectedComponent) {
            case 'Afluency':
                return <Statistics />;
            case 'Staff':
                return;
            case 'Counter':
                return;
            case 'Qrcodes':
                return;
            case 'Shedule':
                return;
            case 'Reports':
                return;
            default:
                return;
        }
    }

    /*
    *   Effects
    */

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
    /*     useEffect(() => {
            if(id){
                console.log(id)
                setIdReceive(id);
            }
        }, [id, setIdReceive])
         */



    return (<>
        {isMobile ? (
            <div>
                <h1>Não Suportado</h1>
            </div>) : (

            <div className="main-container admin">
                <SideBarDash
                    imgProfile='./resources/default_img_profile.png'
                    nameUser='Admin System'
                    topOption={topOptions}
                    lowOption={lowOptions}
                    toogleSubMenu={openSubDivion}
                />



                <div className="dash-main">
                    <TitleDashBoard
                        title={selectedComponent}
                    />
                    {AdmistradorDashBoard()}
                </div>
            </div>
        )}
    </>);
}


/*
<div className="dash-menu">
                        <div className="day-week">
                            {/*   <h4>{weekDay}</h4> 
                        </div>

                        <div className="profile-container">
                            <div className="img-bx">
                                <img src="/img-profile.png" alt="Image Profile" title='Image Profile' />
                            </div>
                            {/*  <h4>{nameAdmin}</h4> *
                        </div>
                    </div>
                    */