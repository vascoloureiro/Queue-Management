
// Context
import { useContext, useState } from "react";
import { AdminContext } from "../../../../Context/AdimSystemContext.tsx";

// Components
import Btn_SubMenu from "../../../../Components/btn-subMenu.tsx";
import DinamicBtnPlacer from "../../../../Components/DinamicBtnPlacer.tsx";
import TableComponent from "../../../../Components/tableComponent.tsx";
import TitleDashBoard from "../../../../Components/TitleDashBoard.tsx";
import SquareInfoDash from "../../../../Components/SquareInfo.tsx";
import Shedule from "../../../../Components/Shedule.tsx";

// Styles
import './staff.css'
import '../module.css'
import { IoTrendingUp, IoTrendingDownOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Staff() {

    const Admin = useContext(AdminContext);
    const [selectedComponent, setSelectedComponent] = useState<string>('OverView')

    const ManageStaff = () => {
        switch (selectedComponent) {
            case 'OverView':
                return ( <TableComponent
                tableHeaders={[
                    'Image',
                    'Name',
                    'Times',
                    'Ratting',
                    'Working'
                ]}

                tableContent={[
                    {
                        image:'./resources/default_img_profile.png',
                        name: 'Joao',
                        times: '20.2s',
                        ratting: '5',
                        working: 'active'
                    },
                    {
                        image:'./resources/img_profile_default.png',
                        name: 'Joao',
                        times: '20.2s',
                        ratting: '5',
                        working: 'active'
                    },
                    {
                        image:'./resources/img_profile_default.png',
                        name: 'Joao',
                        times: '20.2s',
                        ratting: '5',
                        working: 'active'
                    }
                ]}
            />);
            case 'Shedule':
                return (<Shedule 
                    morningData={['Vasco' ,' Laurinda']}
                    afternoonData={['Vasco' ,' Laurinda']}  
                />);
           
            default:
                  return ( <TableComponent
                tableHeaders={[
                    'Image',
                    'Name',
                    'Times',
                    'Ratting',
                    'Working'
                ]}

                tableContent={[
                    {
                        image:'./resources/default_img_profile.png',
                        name: 'Joao',
                        times: '20.2s',
                        ratting: '5',
                        working: 'active'
                    },
                    {
                        image:'./resources/img_profile_default.png',
                        name: 'Joao',
                        times: '20.2s',
                        ratting: '5',
                        working: 'active'
                    },
                    {
                        image:'./resources/img_profile_default.png',
                        name: 'Joao',
                        times: '20.2s',
                        ratting: '5',
                        working: 'active'
                    }
                ]}
            />);
        }
    }


    if (!Admin?.infoValue || !Admin?.valuePercentage) {
        return <div>Loading...</div>;
    }

    return (<>
        <div className="module-dashboard staff">
            <div className="container-squares">
                <SquareInfoDash
                    title="Total Staff"
                    valueInfo={Admin.infoValue[0] ?? 'Na'}
                    percentageValue={Admin.valuePercentage[0] ?? 'Na'}
                    iconPositive={<IoTrendingUp size={22} color="green" />}
                    iconNegative={<IoTrendingDownOutline size={22} color="red" />}
                    contextPercentageValue="Last Day"
                />
                <SquareInfoDash
                    title="Active Staff"
                    valueInfo={Admin.infoValue[0] ?? 'Na'}
                    percentageValue={Admin.valuePercentage[0] ?? 'Na'}
                    iconPositive={<IoTrendingUp size={22} color="green" />}
                    iconNegative={<IoTrendingDownOutline size={22} color="red" />}
                    contextPercentageValue="Last Day"
                />
                <SquareInfoDash
                    title="Low Performance"
                    valueInfo={Admin.infoValue[0] ?? 'Na'}
                    percentageValue={Admin.valuePercentage[0] ?? 'Na'}
                    iconPositive={<IoTrendingUp size={22} color="green" />}
                    iconNegative={<IoTrendingDownOutline size={22} color="red" />}
                    contextPercentageValue="Last Day"
                />
                <SquareInfoDash
                    title="Best Performance"
                    valueInfo={Admin.infoValue[0] ?? 'Na'}
                    percentageValue={Admin.valuePercentage[0] ?? 'Na'}
                    iconPositive={<IoTrendingUp size={22} color="green" />}
                    iconNegative={<IoTrendingDownOutline size={22} color="red" />}
                    contextPercentageValue="Last Day"
                />
            </div>
            <DinamicBtnPlacer right>
                <TitleDashBoard
                    title={'Staff ' + selectedComponent}
                />
                <Btn_SubMenu
                    btnName={selectedComponent}
                    icon={<IoIosArrowDown size={18} color="gray" />}
                    options={['OverView', 'Shedule']}
                    onClick= {setSelectedComponent}
                />
            </DinamicBtnPlacer>
           
            {ManageStaff()}

        </div>
    </>)
}


/*

<div className="Stats-section">
                <div className="stats-title">
                    <h3>Os seus relatórios</h3>
                </div>
                <div className="stats-search-optns">
                    <div className='search-input-container'>
                        <span>
                            <FaSearch size={'25px'} />
                            <input type="text" className="search-input" ></input>
                        </span>
                    </div>
                    <div></div>
                    <div>
                        <button onClick={DropDownAno} className="btn-dwnl-filter" >
                            <p>2025</p>
                            <FaChevronDown size={'15px'} />
                        </button>
                        {dropDownAno && (
                            <DropDownAno />
                        )}
                    </div>
                </div>
                <div className='stats-files-container'>
                    {ficheiros.map((_, index) => (
                        <div className='files-container' key={index}>
                            <div>
                                <FaRegFilePdf size={'40px'} />
                            </div>
                            <div>
                                <p> Relatório do Mês de {meses[index]}</p>
                            </div>
                            <div>
                                <button className='btn-dwnl-file'
                                    onClick={() => obterPDF(index)} // Passa o índice ao clicar no botão
                                >ver mais <FiDownload size={'25px'} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            */