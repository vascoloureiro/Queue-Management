
// Components
import Btn_SubMenu from "../../../../Components/btn-subMenu.tsx";
import DinamicBtnPlacer from "../../../../Components/dinamicBtnOrder.tsx";
import TableComponent from "../../../../Components/tableComponent.tsx";
import TitleDashBoard from "../../../../Components/TitleDashBoard.tsx";

// Styles
import './staff.css'

export default function Staff() {

    return (<>
        <div className="module-dashboard staff">
            
            <TableComponent
               
                tableContent={[
                    {
                        month : 'May',
                        description: 'Report of the analysist of the month may',
                        download: 'Donwload'
                    }
                ]}
                tableHeaders={['Month', 'Description', 'Download']}
            />
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