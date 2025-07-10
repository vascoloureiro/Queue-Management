import { useState, useEffect } from 'react';
import { BsEasel3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import './CSS/header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

   
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 
     
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Alterna a visibilidade do dropdown
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (<>
        {isMobile ? (
            <div className="header">
                <div className="dropdown">
                    <button className="drop-btn" onClick={toggleDropdown}>
                        <GiHamburgerMenu color="black" size="36px" />
                    </button>
                    {isDropdownVisible && (
                        <div className="dropdown-content">
                            <a href="#management">Q:Management</a>
                            <a href="#resources">Resources</a>
                            <a href="#demo">See Demo</a>
                        </div>
                    )}
                </div>
                <div className="brand-name">
                    <h3 className="h3" id="red">Q:</h3><h3 className="h3">BETTER</h3>
                </div>
                <div className="demo-box">
                    <button className="demo-btn"><BsEasel3 color="white" size="24px" /></button>
                </div>
            </div>

        ) : (
            <div className="header-main-container">
                <div className='left-info-header'>
                    <button className='btn-header'>About</button>
                    <button className='btn-header'>Developer</button>
                    <button className='btn-header'>The Project</button>
                </div>

                <div className='center-header'>
                    Queue Manager
                </div>

                <div className='left-info-header'>
                    <button className='btn-header'>ST:Queue</button>
                    <button className='btn-header'>AD:Queue</button>
                    <button className='btn-header'>Y:Queue</button>
                    <button 
                        className='btn-login-header'
                        onClick={()=>{
                            navigate('/login')
                        }}    
                    >Login</button>
                </div>
            </div>
        )}
    </>
    );
};

export default Header;
