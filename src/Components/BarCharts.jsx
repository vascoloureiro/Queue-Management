import {BarChart} from '@mui/x-charts/BarChart'

export default function BarChartComponent (props){
    return(<>
        <BarChart
            xAxis={[{ scaleType: 'band', data: props.x_labes }]}
            series={numberData.map((item) => ({
                 data: item.data,
                label: item.label,
            }))}
            barLabel="value"
            slotProps={{
                legend: {
                  direction: 'row',
                  position: { vertical: 'bottom', horizontal: 'middle' },
                  padding: 30,
                },
              }}
            margin={{ left: 50, top: 50, right: 30 }}
            borderRadius={5}
            style={{ width: '100%', height: '100%' }}
        />
    </>)
}