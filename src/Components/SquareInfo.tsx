// React
import { ReactNode } from "react";

// Styles
import './CSS/squareInfo.css'

type SquareInfoType = {
    title: string;
    valueInfo: number | string;
    iconPositive?: ReactNode
    iconNegative?: ReactNode
    percentageValue?: number | string;
    contextPercentageValue?: string
}

export default function SquareInfoDash({
    title,
    valueInfo,
    iconPositive,
    iconNegative,
    percentageValue,
    contextPercentageValue
}: SquareInfoType) {


    return (<>
        <div className="square-main-container">
            <div className="title-square-info">
                {title}
            </div>
            <div className="value-square-info">
                {valueInfo}
            </div>
            <div className="container-square-info-footer">
                <span className="percentage-value-span green">
                    {iconPositive}
                    {percentageValue && (<>
                        {percentageValue}%
                    </>
                    )}
                </span> 
                {contextPercentageValue && (
                    contextPercentageValue
                )}
                
            </div>
        </div>

    </>)

}