import { Children, ReactNode } from "react";

// Styles
import './CSS/dinamicBtnPlacer.css'

type DinamicBtnPlacer = {
    left?: boolean;
    right?: boolean;
    both?:boolean
    children?: ReactNode;
}

export default function DinamicBtnPlacer({left, right, both, children}:DinamicBtnPlacer){

    return(<>
        <div className="main-container-btn-placer">
        {left && (
            <div className="left-container-btn-placer">
                {children}
            </div>
        )}

        {right && (
            <div className="right-container-btn-placer">
                  {children}
            </div>
        )}

        {both && (<>
            <div className="left-container-btn-placer">
                  {children}
            </div>

            <div className="right-container-btn-placer">
                  {children}
            </div>
        </>)}

        </div>
    
    </>)
}