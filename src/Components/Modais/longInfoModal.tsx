import './CSS Modais/infoModal.css';
import { AiOutlineInfo } from "react-icons/ai";

type LongInfoModal = {
    titleModal: string;
    message: string;
    btnMessage: string;
    onConfirm: ()=> void;
    onCancel?: ()=>void;

}
export default function LongInfoModal({
    titleModal,
    message,
    onConfirm,
    onCancel,
    btnMessage
} : LongInfoModal) { 

    return (<>
            <div className="wrapper-modal-container">
                <div className="modal-main-container">
                    <div className="header-modal">
                        <div className="circle-big info-outline-color">
                            <div className="circle-small info-insideoutline-color">
                                <AiOutlineInfo size={'clamp(1.8rem, 1.8vw, 2rem)'} color='#203cd9' />
                            </div>
                        </div>
                        {titleModal}
                    </div>

                    <div className="info-modal">
                        {message}
                    </div>

                    <div className="container-btn-container">
                        <button className="btn-confirm-modal info-btn-color"
                            onClick={onConfirm}
                        >
                            {btnMessage}
                        </button>
                    </div>
                </div>
            </div>
    </>)
}