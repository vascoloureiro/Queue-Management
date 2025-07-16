import { useContext, useEffect } from 'react'
import './CSS Modais/imgModal.css'
import { EditorContext } from '../Context/EditorContext';

export function ImgModal(props) {

    const {
        caminhoImagem
    } = useContext(EditorContext);


    return (<>
        <div className="wrapper-modal-container">
            <div className='mdl-conf-img-main'>
                <div className="img-container-mdl">
                    <img className="img-uploaded" src={caminhoImagem?.url} alt={caminhoImagem?.name} />
                </div>

                <div className="title-modal-editor">
                    {props.titleModal}
                </div>

                <div className='subtitle-modal-editor'>
                    {props.message}
                </div>

                <div className='scnd-cnt-conf-img'>
                    <button className='btn-cancel-modal'
                        onClick={props.onCancel}
                    >Cancelar</button>
                    <button className='btn-adc-conf-img'
                        onClick={props.onConfirm}
                    >{props.btnMessage}</button>

                </div>
            </div>
        </div>
    </>)
}


/*  // Funcao para cancelar o upload da imagem para o modelo
   const fecharModal = () => {
       setModalConfImagem(false);
       setCaminhoImagem(null)
   } */

/*     // Apos a validação do utilizar iremos permitir que o mesmo 
    //      posicione a imagem no modelo
    const posicionarImg = () => {
        setModoLivre(false);
        setModalConfImagem(false);
        setPedirCoordUV(true);
        document.body.style.cursor = "crosshair"
    } */