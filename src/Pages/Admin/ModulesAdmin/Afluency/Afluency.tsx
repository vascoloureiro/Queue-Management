// React
import { useContext } from 'react';

// Components
import ChartComponent from '../../../../Components/Chart.tsx';
import SquareInfoDash from '../../../../Components/SquareInfo.tsx';

//Styles
import './afluency.css'
import { IoTrendingUp, IoTrendingDownOutline } from "react-icons/io5";
import { AdminContext } from '../../../../Context/AdimSystemContext.tsx';


// Type
type StatisticsType = {

}

export default function Statistics({

}: StatisticsType) {

    const Admin = useContext(AdminContext)


    if (!Admin?.infoValue || !Admin?.valuePercentage) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="module-dashboard afluency">
                <div className="container-squares">
                    <SquareInfoDash
                        title="Total Users"
                        valueInfo={Admin.infoValue[0] ?? 'Na'}
                        percentageValue={Admin.valuePercentage[0] ?? 'Na'}
                        iconPositive={<IoTrendingUp size={22} color="green" />}
                        iconNegative={<IoTrendingDownOutline size={22} color="red" />}
                        contextPercentageValue="Last Day"
                    />

                    <SquareInfoDash
                        title="Median Service Time"
                        valueInfo={(Admin.infoValue[1] ?? 'Na') + 's'}
                        percentageValue={Admin.valuePercentage[1] ?? 'Na'}
                        iconPositive={<IoTrendingUp size={22} color="green" />}
                        iconNegative={<IoTrendingDownOutline size={22} color="red" />}
                        contextPercentageValue="Last Day"
                    />

                    <SquareInfoDash
                        title="FeedBack"
                        valueInfo={(Admin.infoValue[2] ?? 'Na') + '/ 5'}
                        percentageValue={Admin.valuePercentage[2] ?? 'Na'}
                        iconPositive={<IoTrendingUp size={22} color="green" />}
                        iconNegative={<IoTrendingDownOutline size={22} color="red" />}
                        contextPercentageValue="Last Day"
                    />

                    <SquareInfoDash
                        title="Worker of the Day"
                        valueInfo={Admin.infoValue[3] ?? 'Na'}
                    />
                </div>

                <div className='wrapper-chart'>
                    <ChartComponent
                        titleGraph='Services Time'
                        dataArray={[
                            {
                                arrayInfo: [10, 20, 40, 50, 50, 15, 35],
                                label: 'Current Week',
                                colorLine: '#0051ffff',
                            },
                            {
                                arrayInfo: [10, 20, 40, 20, 50, 45, 35],
                                label: 'Previous Week',
                                colorLine: '#ff0000',
                            },
                        ]}

                        typeGraph='line'
                        labels={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
                    />
                </div>


            </div>


        </>
    );


}



/*
 <div className="section">
                <div className="section-first">
                    <h2>Tempos Serviço</h2>

                </div>
                <div className="chart-box">
                    {/* <TimesChart /> 
                </div>
            </div>

            <div className="low-section">
                <div>
                    <span>
                        <h1>A</h1><h4>A</h4>
                    </span>
                </div>

                <div>
                    <span>
                          <h1>A</h1><h4>A</h4>
                    </span>
                </div>

                <div>
                    <span>
                         <h1>A</h1><h4>A</h4>
                    </span>
                </div>

                <div>
                    <span>
                          <h1>A</h1><h4>A</h4>
                    </span>
                </div>

                <div>
                    <span>
                        <h3>Not Show: </h3><h4>0</h4>
                    </span>
                </div>
            </div>*/