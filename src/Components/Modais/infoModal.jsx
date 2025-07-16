import { useContext, useEffect } from 'react'
import './CSS Modais/infoModal.css';
import { EditorContext } from '../Context/EditorContext';
import { AiOutlineInfo } from "react-icons/ai";

export function InfoModal(props) {
    const {
        modalConfTexto, setModalConfTexto,
        setPedirCoordUV,
        setModoLivre,
    } = useContext(EditorContext);

    // Funcao para cancelar o upload da imagem para o modelo
    return (<>
            <div className="wrapper-modal-container">
                <div className="modal-main-container">
                    <div className="header-modal">
                        <div className="circle-big info-outline-color">
                            <div className="circle-small info-insideoutline-color">
                                <AiOutlineInfo size={'clamp(1.8rem, 1.8vw, 2rem)'} color='#203cd9' />
                            </div>
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
                        <button className="btn-confirm-modal info-btn-color"
                            onClick={props.onConfirm}
                        >
                            {props.btnMessage}
                        </button>
                    </div>
                </div>
            </div>
    </>)
}