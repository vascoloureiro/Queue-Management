
// Style
import './CSS/Shedule.css';
import ModalSheduleInfo from './Modais/modalSheduleInfo.tsx';
import { FaUserMinus, FaUserPlus,FaChevronDown , FaLink } from "react-icons/fa";

// Type

type MorningData = {

}

type SheduleType = {
    morningData?:  string[], 
    afternoonData:  string[], 
    activeModalMorning?: boolean,
    activeModalAfternoon?: boolean,

    onClickMorning: (value: number) => void,
    onClickAfternoon: (value:number) => void
}

export default function Shedule({
    morningData,
    afternoonData,
    activeModalMorning,
    activeModalAfternoon,

    onClickMorning,
    onClickAfternoon
} : SheduleType){

    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Staruday', 'Sunday'];

    return(<>
      <div className="schedule-main-container">

            <div className="shedule-container">
                        {weekDays.map((day, index) => (
                            <div key={index}>
                                <p>{day}</p>

                                {/* Botão para a Manhã */}
                                <button
                                    onClick={() => {
                                        onClickMorning()
                                    }}
                                    className={`shedule-btn ${morningData.length > 3 ? 'many-imgs' : ''}`}
                                    id="red-schedule"
                                >
                                    {morningData.slice(0, 3).map((trab, indexTm) => (
                                        <div key={indexTm}>
                                            <img src="/resources/default_img_profile.png" title="Image Profile" />
                                        </div>
                                    ))}
                                    {morningData.length > 3 && (
                                        <div className="extra-count">
                                            +{morningData[index] - 3 }
                                        </div>
                                    )}
                                </button>
                                
                                {activeModalMorning === index && 
                                    <ModalSheduleInfo 
                                
                                    />
                                }

                                {/* Botão para a Tarde */}
                                <button
                                    onClick={() => {
                                        onClickAfternoon()
                                    }}
                                    className={`shedule-btn ${afternoonData.length > 3 ? 'many-imgs' : ''}`}
                                    id="blue-schedule"
                                >
                                    {afternoonData.slice(0, 3).map((trab, indexT) => (
                                        <div key={indexT}>
                                            <img src="/resources/default_img_profile.png" title={trab} />
                                        </div>
                                    ))}
                                    {afternoonData.length > 3 && (
                                        <div className="extra-count">
                                            +{afternoonData[index] - 3}
                                        </div>
                                    )}
                                </button>
                                {activeModalAfternoon === index && 
                                    <ModalSheduleInfo 
                                
                                    />
                                }
                            </div>
                        ))}
                    </div>

                    <div className="schedule-footer">
                        <button 
                            className="btn-schedule-footer" 
                            title='Add Staff'
                            onClick={() => toggleModal(setModalAdicionaTrabalhador)}
                        >
                            <FaUserPlus size="20px" />
                        </button>
                        <button 
                            className="btn-schedule-footer" 
                            title='Remove Staff' 
                            onClick={() => toggleModal(setModalRemoveTrabalhador)}
                        >
                            <FaUserMinus size="20px" />
                        </button>
                        
                        <button 
                            className="btn-schedule-footer" 
                            title='Connect Clinic' 
                            onClick={() => toggleModal(setModalConectAPI)}
                        >
                            <FaLink size="20px" />
                        </button>
                    </div>
                </div>

    </>)
}