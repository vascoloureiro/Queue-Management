
// Components
import TableComponent from "../../../../Components/tableComponent.tsx";
import Btn_SubMenu from "../../../../Components/btn-subMenu.tsx";
import DinamicBtnPlacer from "../../../../Components/DinamicBtnPlacer.tsx";
import TitleDashBoard from "../../../../Components/TitleDashBoard.tsx";

// Styles
import { IoIosArrowDown } from "react-icons/io";

export default function Tickets(){

    return(<>
        <DinamicBtnPlacer right>
                <TitleDashBoard
                    title="Your Reports"
                />
                <Btn_SubMenu
                    btnName="Called"
                    options={['Month', 'Year']}
                    
                />
                  
                <Btn_SubMenu
                    btnName="Paused"
                    options={['Month', 'Year']}
                    
                />
                <Btn_SubMenu
                    btnName="Filter"
                    options={['Month', 'Year']}
                    icon={<IoIosArrowDown size={18} color="gray" />}
                />
        </DinamicBtnPlacer>
        <TableComponent
                tableContent={[
                    {
                        number: 12,
                        time: '16 : 12',
                        queue: 'A',
                        state: 'watting'
                    },
                    {
                        number: 13,
                        time: '16 : 16',
                        queue: 'C',
                        state: 'watting'
                    },
                    {
                        number: 10,
                        time: '16 : 16',
                        queue: 'C',
                        state: 'called once'
                    },
                    {
                        number: 80,
                        time: 'yesterday',
                        queue: 'C',
                        state: 'appointment'
                    },

                ]}
                tableHeaders={['Number', 'Time', 'Queue', 'State']}
            />
    </>)
}