
// Components
import Btn_SubMenu from "../../../../Components/btn-subMenu.tsx";
import DinamicBtnPlacer from "../../../../Components/DinamicBtnPlacer.tsx";

import TitleDashBoard from "../../../../Components/TitleDashBoard.tsx";

// Styles
import './qrcode.css'
import '../module.css'
import { IoIosArrowDown } from "react-icons/io";

export default function QrCodes() {

    return (<>
        <div className="module-dashboard qrcodes">
            <DinamicBtnPlacer right>
                <TitleDashBoard
                    title="Qr Codes"
                />
                <Btn_SubMenu
                    btnName="Queue A"
                    icon={<IoIosArrowDown size={18} color="gray" />}
                    options={['Month', 'Year']}
                />
            </DinamicBtnPlacer>
          
        </div>
    </>)
}
