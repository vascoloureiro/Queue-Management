import { ReactNode } from "react";

//Styles
import './CSS/titleDashBoard.css'

type TitleType ={
    title: string;
    children?: ReactNode
}

export default function TitleDashBoard({title}: TitleType){

    return(<>
    <div className="container-title-dsh">
        {title}
    </div>
    </>)
}