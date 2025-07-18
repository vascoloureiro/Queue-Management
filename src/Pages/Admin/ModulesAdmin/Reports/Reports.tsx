
// Components
import Btn_SubMenu from "../../../../Components/btn-subMenu.tsx";
import DinamicBtnPlacer from "../../../../Components/DinamicBtnPlacer.tsx";
import TableComponent from "../../../../Components/tableComponent.tsx";
import TitleDashBoard from "../../../../Components/TitleDashBoard.tsx";

// Styles
import './reports.css'
import '../module.css'
import { IoIosArrowDown } from "react-icons/io";
import { BsFiletypePdf } from "react-icons/bs";

export default function Reports() {

    return (<>
        <div className="module-dashboard reports">
            <DinamicBtnPlacer right>
                <TitleDashBoard
                    title="Your Reports"
                />
                <Btn_SubMenu
                    btnName="Month"
                    icon={<IoIosArrowDown size={18} color="gray" />}
                    options={['Month', 'Year']}
                />
            </DinamicBtnPlacer>
            <TableComponent
                tableContent={[
                    {
                        icon: <BsFiletypePdf size={22} />,
                        month: 'May',
                        description: 'Report of the analysist of the month may',
                        download: 'Donwload'
                    },
                      {
                        icon: <BsFiletypePdf size={22} />,
                        month: 'May',
                        description: 'Report of the analysist of the month may',
                        download: 'Donwload'
                    }
                ]}
                tableHeaders={['Icon', 'Month', 'Description', 'Download']}
            />
        </div>
    </>)
}
