import { ReactNode, useState } from "react"

// Styles
import './CSS/sidebar.css'
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { FiCornerDownRight } from "react-icons/fi";

// Types
type SubOptions = {
    label: string;
    icon: ReactNode;
    onClick: () => void;
};

type SideBarOption = {
    label: string;
    icon: ReactNode;
    hasSubOptions?: SubOptions[];
    onClick: () => void;
};

type SideBar = {
    imgProfile: string;
    nameUser: string;
    topOption: SideBarOption[];
    lowOption: SideBarOption[];
    endOption?: SideBarOption[];
    toogleSubMenu?: boolean;
    openSideBar?: boolean;
    onLogOut?: () => void;
}

export default function SideBarDash({
    imgProfile,
    nameUser,
    topOption,
    lowOption,
    endOption,
    toogleSubMenu,
    openSideBar,
    onLogOut
}: SideBar) {

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [infoSelecionada, setInfoSelecionada] = useState<string>('projetos')

    return (
        <>
            {!isMobile ? (
                <div className='dshU-sid-bar-container'>
                    <div className='dshU-tp-sd-bar'>
                        <button className="profile-img-sdBar">
                            <img className="img-profile" src={imgProfile || '/resources/default_img_profile.png'} />
                            <span className='text-sidebar'>{nameUser}</span>
                        </button>
                    </div>

                    <div className='dshU-mid-sd-bar'>
                        {topOption.map((option, key) => (
                            <>
                                <button
                                    key={key}
                                    className={infoSelecionada === option.label ? ('dashU-btn-opts-sd active') : ('dashU-btn-opts-sd')}
                                    onClick={() => {
                                        setInfoSelecionada(option.label);
                                        option.onClick();
                                    }}
                                >
                                    {option.icon}
                                    <span className="text-sidebar">{option.label}</span>
                                </button>
                                {option.hasSubOptions && option.hasSubOptions.length > 0 && toogleSubMenu && (
                                    <div className='submenu-sidebar'>
                                        {option.hasSubOptions.map((content, subKey) => (
                                            <button
                                                key={subKey}
                                                className={infoSelecionada === content.label ? 'submenu-sidebar-btn active' : 'submenu-sidebar-btn'}
                                                onClick={() => {
                                                    setInfoSelecionada(content.label);
                                                    content.onClick();
                                                }}
                                            >
                                                <div
                                                    className="icon-submenu-sidebar"
                                                >
                                                    {content.icon}
                                                </div>

                                                <span
                                                    className={infoSelecionada === content.label ? 'text-sidebar active' : 'text-sidebar'}
                                                >
                                                    {content.label}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </>
                        ))}
                    </div>

                    <div className='dshU-last-mid-sd-bar'>
                        {lowOption.map((option, key) => (
                            <div key={key}>
                                <button
                                    className={infoSelecionada === option.label.toLowerCase() ? ('dashU-btn-opts-sd active') : ('dashU-btn-opts-sd')}
                                    onClick={() => {
                                        setInfoSelecionada(option.label.toLowerCase());
                                        option.onClick();
                                    }}
                                >
                                    {option.icon}
                                    <span className="text-sidebar">{option.label}</span>
                                </button>
                                {option.hasSubOptions && option.hasSubOptions.length > 0 && (
                                    <div className='submenu-sidebar'>
                                        {option.hasSubOptions.map((content, subKey) => (
                                            <button
                                                key={subKey}
                                                className={infoSelecionada === content.label.toLowerCase() ? 'submenu-sidebar-btn active' : 'submenu-sidebar-btn'}
                                                onClick={() => {
                                                    setInfoSelecionada(content.label.toLowerCase());
                                                    content.onClick();
                                                }}
                                            >
                                                {content.icon}
                                                <span className="text-sidebar">{content.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className='logout-div'>
                        {endOption?.map((option, key) => (
                            <div key={key}>
                                <button
                                    className='btn-info-dshU'
                                    onClick={() => {
                                        setInfoSelecionada(option.label.toLowerCase());
                                        option.onClick();
                                    }}
                                >
                                    {option.icon}
                                    <span className="text-sidebar">{option.label}</span>
                                </button>
                                {option.hasSubOptions && option.hasSubOptions.length > 0 && (
                                    <div className='submenu-sidebar'>
                                        {option.hasSubOptions.map((content, subKey) => (
                                            <button
                                                key={subKey}
                                                className={infoSelecionada === content.label.toLowerCase() ? 'submenu-sidebar-btn active' : 'submenu-sidebar-btn'}
                                                onClick={() => {
                                                    setInfoSelecionada(content.label.toLowerCase());
                                                    content.onClick();
                                                }}
                                            >
                                                <FiCornerDownRight size={14} color='#7a7a7a' />
                                                <span className="text-sidebar">{content.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <button
                            className='btn-logOut-dshU'
                            onClick={onLogOut}
                        >
                            <HiOutlineArrowRightOnRectangle size={20} color='#D55F5A' />
                            <span className='text-sidebar'>LogOut</span>
                        </button>
                    </div>
                </div>
            ) : openSideBar ? (
                <div className='wrapper-sd-bar'>
                    <div className='dshU-sid-bar-container'>
                        <div className='dshU-tp-sd-bar'>
                            <button className="profile-img-sdBar">
                                <img className="img-profile" src={imgProfile || '/resources/default_img_profile.png'} />
                                <span className='text-sidebar'>{nameUser}</span>
                            </button>
                        </div>

                        <div className='dshU-mid-sd-bar'>
                            {topOption.map((option, key) => (
                                <>
                                    <button
                                        key={key}
                                        className={infoSelecionada === option.label ? ('dashU-btn-opts-sd active') : ('dashU-btn-opts-sd')}
                                        onClick={() => {
                                            setInfoSelecionada(option.label);
                                            option.onClick();
                                        }}
                                    >
                                        {option.icon}
                                        <span className="text-sidebar">{option.label}</span>
                                    </button>
                                    {option.hasSubOptions && option.hasSubOptions.length > 0 && toogleSubMenu && (
                                        <div className='submenu-sidebar'>
                                            {option.hasSubOptions.map((content, subKey) => (
                                                <button
                                                    key={subKey}
                                                    className={infoSelecionada === content.label ? 'submenu-sidebar-btn active' : 'submenu-sidebar-btn'}
                                                    onClick={() => {
                                                        setInfoSelecionada(content.label);
                                                        content.onClick();
                                                    }}
                                                >
                                                    <div
                                                        className="icon-submenu-sidebar"
                                                    >
                                                        {content.icon}
                                                    </div>

                                                    <span
                                                        className={infoSelecionada === content.label ? 'text-sidebar active' : 'text-sidebar'}
                                                    >
                                                        {content.label}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>

                        <div className='dshU-last-mid-sd-bar'>
                            {lowOption.map((option, key) => (
                                <div key={key}>
                                    <button
                                        className={infoSelecionada === option.label.toLowerCase() ? ('dashU-btn-opts-sd active') : ('dashU-btn-opts-sd')}
                                        onClick={() => {
                                            setInfoSelecionada(option.label.toLowerCase());
                                            option.onClick();
                                        }}
                                    >
                                        {option.icon}
                                        <span className="text-sidebar">{option.label}</span>
                                    </button>
                                    {option.hasSubOptions && option.hasSubOptions.length > 0 && (
                                        <div className='submenu-sidebar'>
                                            {option.hasSubOptions.map((content, subKey) => (
                                                <button
                                                    key={subKey}
                                                    className={infoSelecionada === content.label.toLowerCase() ? 'submenu-sidebar-btn active' : 'submenu-sidebar-btn'}
                                                    onClick={() => {
                                                        setInfoSelecionada(content.label.toLowerCase());
                                                        content.onClick();
                                                    }}
                                                >
                                                    {content.icon}
                                                    <span className="text-sidebar">{content.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className='logout-div'>
                            {endOption?.map((option, key) => (
                                <div key={key}>
                                    <button
                                        className='btn-info-dshU'
                                        onClick={() => {
                                            setInfoSelecionada(option.label.toLowerCase());
                                            option.onClick();
                                        }}
                                    >
                                        {option.icon}
                                        <span className="text-sidebar">{option.label}</span>
                                    </button>
                                    {option.hasSubOptions && option.hasSubOptions.length > 0 && (
                                        <div className='submenu-sidebar'>
                                            {option.hasSubOptions.map((content, subKey) => (
                                                <button
                                                    key={subKey}
                                                    className={infoSelecionada === content.label.toLowerCase() ? 'submenu-sidebar-btn active' : 'submenu-sidebar-btn'}
                                                    onClick={() => {
                                                        setInfoSelecionada(content.label.toLowerCase());
                                                        content.onClick();
                                                    }}
                                                >
                                                    <FiCornerDownRight size={14} color='#7a7a7a' />
                                                    <span className="text-sidebar">{content.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <button
                                className='btn-logOut-dshU'
                                onClick={onLogOut}
                            >
                                <HiOutlineArrowRightOnRectangle size={20} color='#D55F5A' />
                                <span className='text-sidebar'>LogOut</span>
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}


/*
<div className='wrapper-sd-bar'>
                    <div className='dshU-sid-bar-container'>
                        <div className='dshU-tp-sd-bar'>
                            <button className="profile-img-sdBar">
                                <img className="img-profile" src={imgProfile || '/resources/default_img_profile.png'} />
                                <span className='text-sidebar'>{nameUser}</span>
                            </button>
                        </div>

                        <div className='dshU-mid-sd-bar'>
                            {topOption.map((option, key) => (
                                <>
                                    <button
                                        key={key}
                                        className={infoSelecionada === option.label ? ('dashU-btn-opts-sd active') : ('dashU-btn-opts-sd')}
                                        onClick={() => {
                                            setInfoSelecionada(option.label);
                                            option.onClick();
                                        }}
                                    >
                                        {option.icon}
                                        <span className="text-sidebar">{option.label}</span>
                                    </button>
                                    {option.hasSubOptions && option.hasSubOptions.length > 0 && toogleSubMenu && (
                                        <div className='submenu-sidebar'>
                                            {option.hasSubOptions.map((content, subKey) => (
                                                <button
                                                    key={subKey}
                                                    className={infoSelecionada === content.label ? 'submenu-sidebar-btn active' : 'submenu-sidebar-btn'}
                                                    onClick={() => {
                                                        setInfoSelecionada(content.label);
                                                        content.onClick();
                                                    }}
                                                >
                                                    <div
                                                        className="icon-submenu-sidebar"
                                                    >
                                                        {content.icon}
                                                    </div>

                                                    <span
                                                        className={infoSelecionada === content.label ? 'text-sidebar active' : 'text-sidebar'}
                                                    >
                                                        {content.label}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>

                        <div className='dshU-last-mid-sd-bar'>
                            {lowOption.map((option, key) => (
                                <div key={key}>
                                    <button
                                        className={infoSelecionada === option.label.toLowerCase() ? ('dashU-btn-opts-sd active') : ('dashU-btn-opts-sd')}
                                        onClick={() => {
                                            setInfoSelecionada(option.label.toLowerCase());
                                            option.onClick();
                                        }}
                                    >
                                        {option.icon}
                                        <span className="text-sidebar">{option.label}</span>
                                    </button>
                                    {option.hasSubOptions && option.hasSubOptions.length > 0 && (
                                        <div className='submenu-sidebar'>
                                            {option.hasSubOptions.map((content, subKey) => (
                                                <button
                                                    key={subKey}
                                                    className={infoSelecionada === content.label.toLowerCase() ? 'submenu-sidebar-btn active' : 'submenu-sidebar-btn'}
                                                    onClick={() => {
                                                        setInfoSelecionada(content.label.toLowerCase());
                                                        content.onClick();
                                                    }}
                                                >
                                                    {content.icon}
                                                    <span className="text-sidebar">{content.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className='logout-div'>
                            {endOption.map((option, key) => (
                                <div key={key}>
                                    <button
                                        className='btn-info-dshU'
                                        onClick={() => {
                                            setInfoSelecionada(option.label.toLowerCase());
                                            option.onClick();
                                        }}
                                    >
                                        {option.icon}
                                        <span className="text-sidebar">{option.label}</span>
                                    </button>
                                    {option.hasSubOptions && option.hasSubOptions.length > 0 && (
                                        <div className='submenu-sidebar'>
                                            {option.hasSubOptions.map((content, subKey) => (
                                                <button
                                                    key={subKey}
                                                    className={infoSelecionada === content.label.toLowerCase() ? 'submenu-sidebar-btn active' : 'submenu-sidebar-btn'}
                                                    onClick={() => {
                                                        setInfoSelecionada(content.label.toLowerCase());
                                                        content.onClick();
                                                    }}
                                                >
                                                    <FiCornerDownRight size={14} color='#7a7a7a' />
                                                    <span className="text-sidebar">{content.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <button
                                className='btn-logOut-dshU'
                                onClick={onLogOut}
                            >
                                <HiOutlineArrowRightOnRectangle size={20} color='#D55F5A' />
                                <span className='text-sidebar'>LogOut</span>
                            </button>
                        </div>
                    </div>
                </div>
*/