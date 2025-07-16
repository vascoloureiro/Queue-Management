import {
    Chart as ReactChart,
    AxisOptions,
} from 'react-charts';

type DataType = {
    arrayInfo: number[];
    label: string;
    colorLine?: string;
};

type LinearChartType = {
    dataArray: DataType[];
    labels: string[];
    typeGraph: string;
    titleGraph?: string;
};


type Datum = { x: string; y: number };

export default function ChartComponent({
    dataArray,
    labels,
    typeGraph,
    titleGraph
}: LinearChartType) {
    // Clean data
    const cleanDataArray = dataArray.map(item => ({
        ...item,
        arrayInfo: item.arrayInfo
            .slice(0, labels.length)
            .map(v => {
                const num = Number(v);
                return (typeof num === 'number' && !isNaN(num) && isFinite(num)) ? num : 0;
            })
    }));

    // Prepare data for react-charts
    const chartData = cleanDataArray.map(item => ({
        label: item.label,
        data: labels.map((label, idx) => ({
            x: label,
            y: item.arrayInfo[idx] ?? 0,
        })),
        color: item.colorLine,
    }));

    // Y-axis max calculation
    const allValues = cleanDataArray.flatMap(item => item.arrayInfo);
    const maxY = Math.max(...allValues, 10);

    const primaryAxis: AxisOptions<Datum> = {
        getValue: datum => datum.x,
    };

    const secondaryAxis: AxisOptions<Datum> = {
        getValue: datum => datum.y,
        min: 0,
        max: maxY,
        elementType: typeGraph as 'line' | 'bar' | 'bubble' | 'area'
    };

    return (
        <div style={{ width: '95%', height: '400px', gap:'5px'}}>
            <h3>{titleGraph}</h3>
            <ReactChart
                options={{
                    data: chartData,
                    primaryAxis,
                    secondaryAxes: [secondaryAxis],
                    tooltip: true,
                    getSeriesStyle: series => ({
                        color: series.originalSeries.color
                    })
                }}
            />
        </div>
    );
}
