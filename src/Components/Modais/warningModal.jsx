import { PiWarningBold } from "react-icons/pi";
import './CSS Modais/warningModal.css'

export default function WarningModal(props){
    return(<>
        <div className="wrapper-modal-container">
            <div className="modal-main-container">
                <div className="header-modal">
                    <div className="circle-big warning-outline-color">
                        <div className="circle-small warning-insideoutline-color">
                           {props.icon || <PiWarningBold size={'clamp(1.8rem, 1.8vw, 2rem)'} color='#d92d20'/>
 }                       </div>
                    </div>
                    {props.titleModal}
                </div>

                <div className="info-modal">
                    {props.message}
                </div>

                <div className="container-btn-container">
                    <button className="btn-cancel-modal"
                            onClick={props.onCancel}
                    >Cancelar</button>
                    <button className="btn-confirm-modal warning-btn-color"
                            onClick={props.onConfirm}
                    >
                        {props.btnMessage}
                    </button>
                </div>
            </div>

        </div>
    </>)
}