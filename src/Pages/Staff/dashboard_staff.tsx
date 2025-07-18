// React 
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

// Components
import SideBarDash from '../../Components/SideBar.tsx';
import TitleDashBoard from '../../Components/TitleDashBoard.tsx';

// Modules
import HomeStaff from './Module Staff/Home/homeStaff.tsx';
import Tickets from './Module Staff/Tickets/tickets.tsx';

// Styles
import './dashStaff.css'
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
import { PiBuilding, PiChartLine, PiPlus, PiPhoneCall  } from 'react-icons/pi';
import { IoTicketOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function DashBoardStaffSystem() {

    // Params
    const { id } = useParams();

    // Context

    // States
    const [isMobile, setIsMobile] = useState(window.innerHeight < 550);

    const [openSubDivion, setOpenSubDivion] = useState<boolean>(false);
    const [selectedInfo, setSelectedInfo] = useState<string>('');
    const [selectedComponent, setSelectedComponent] = useState<string>('Home');


    // const
    // For SideBar
    const topOptions = [
        {
            label: 'Home',
            icon: <GoHome size={22} color={selectedComponent === 'Home' ? 'black' : '#757575'} />,
            onClick: () => {
              
                setSelectedInfo('home')
                setSelectedComponent('Home')
            },
        },
        {
            label: 'Tickets',
            icon: <IoTicketOutline  size={22} color={selectedComponent === 'Token' ? 'black' : '#757575'} />,
            onClick: () => {
                  setOpenSubDivion(!openSubDivion)
                setSelectedInfo('TCalls')
                setSelectedComponent('Token Calls')
            },
              hasSubOptions: [
                {
                    label: 'Tickets Calls',
                    icon: <FiCornerDownRight size={12} color={selectedComponent === 'Token Calls' ? 'black' : '#757575'} />,
                    onClick: () => {
                        setSelectedInfo('TCalls')
                        setSelectedComponent('Tickets Calls')
                    }
                },
                {
                    label: 'No Calls',
                    icon: <FiCornerDownRight size={12} color={selectedComponent === 'No Calls' ? 'black' : '#757575'} />,
                    onClick: () => {
                        setSelectedInfo('nocalls')
                        setSelectedComponent('No Calls')
                    }
                },
                {
                    label: 'Appointments ',
                    icon: <FiCornerDownRight size={12} color={selectedComponent === 'Appointments' ? 'black' : '#757575'} />,
                    onClick: () => {

                        setSelectedInfo('TSechudel')
                        setSelectedComponent('Appointments')
                    },
                },
            ]
        },
        {
            label: 'ReCall',
            icon: <PiPhoneCall  size={22} color={selectedComponent === 'ReCall' ? 'black' : '#757575'} />,
            onClick: () => {
                setSelectedInfo('reCall')
                setSelectedComponent('ReCall')
            }
        }
    ];

    const lowOptions = [
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
            case 'Home':
                return <HomeStaff />;
            case 'Token Calls':
                return <Tickets />;
            case 'No Calls':
                return <Tickets />;
            case 'Token Sechude':
                return <Tickets />;
            case 'ReCall':
                return <Tickets />;
            default:
                return ;
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



                <div className="dash-main-staff">
                    {selectedComponent !== 'Home' && (
                        <div className="control-ticket-container">
                            <div className="wrapper-btn call">
                                <button
                                    className="btn-control-ticket "
                                >
                                    <FaPlus size={50}/>
                                    Call
                                </button>

                            </div>

                            <div className="wrapper-btn pause">
                                <button
                                    className="btn-control-ticket"
                                >
                                    <FaPlus size={50}/>
                                    Pause
                                </button>

                            </div>

                            <div className="wrapper-btn continue">
                                <button
                                    className="btn-control-ticket"
                                >
                                    <FaPlus size={50}/>
                                    Continue
                                </button>

                            </div>

                            <div className="wrapper-btn transfer">
                                <button
                                    className="btn-control-ticket"
                                >
                                    <FaPlus size={50}/>
                                    Transfer
                                </button>

                            </div>
                            
                        </div>
                    )}

                    <div className="wrapper-content">
                        {AdmistradorDashBoard()}
                    </div>
                </div>
            </div>
        )}
    </>);
}
