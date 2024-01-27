import { NextPage } from 'next'
import ApexChart from 'react-apexcharts'

interface Props { }

const Chart: NextPage<Props> = () => {
    return (
        <div className='text-sm'>
            <ApexChart
                options={{
                    legend: {
                        position:"bottom",
                        fontFamily:"DB Ozone X",
                        fontSize:"17rem"
                    },
                    dataLabels: {
                        style: {
                            fontFamily:"DB Ozone X",
                            fontSize:"1rem",
                        },
                        
                    },
                    labels: ['องค์การบริการ องค์การนิสิต', 'สภาผู้แทนนิสิต', 'สโมสรนิสิต', 'กลุ่มกิจกรรม'],
                }}
                series={[34, 34, 12, 5]}
                type="donut"
            />
        </div>
    )
}

export default Chart