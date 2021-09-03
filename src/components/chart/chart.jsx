import React,{useState,useEffect} from 'react'
import { fetchDailyData } from '../../api'
import {Line,Bar} from 'react-chartjs-2'
import Styles from './chart.module.css'


const Chart = ({data,country}) => {
    
    const[dailyData,setDailyData] = useState([])

    useEffect(()=>{
        const fetchAPI = async()=>{
            // const data = await fetchDailyData()
            // setDailyData(data)
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
    },[])
    
    const lineChart = (      
        dailyData.length
        ? 
    <Line data={{
        labels:dailyData.map(({date})=> date),
        datasets:[{
            data:dailyData.map(({confirmed})=> confirmed),
            label:'confirmed',
            borderColor: '#3333ff',
            fill:true
        },{
            data:dailyData.map(({deaths})=> deaths),
            label:'confirmed',
            borderColor: 'red',
            backgroundColor: 'rgb(255,0,0,0.5)',
            fill:true
        }]
    }}
    />
    :null
    )

    const barChart=(
        data.confirmed
        ?
        <Bar
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:'People',
                backgroundColor:[
                    'rbga(0,0,255,0.5)',
                    'rbga(0,0.5,255,0)',
                    'rbga(0.5,255,0,0)'
                ],
                data:[data.confirmed.value,data.recovered.value,data.deaths.value]
            }]
        }}
        options={{
            legends:{display:false},
            title:{display:true,text:'Current State'}
        }}
        
        />
        :null 
    )
    return (
        <div className={Styles.container}>
            {/* {lineChart} */}
        {/* {barChart} */}
        {country?barChart:lineChart}
        </div>
    )
    
}

export default Chart
