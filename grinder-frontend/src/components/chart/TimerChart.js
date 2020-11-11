import React,{useState,useEffect} from 'react';
import {VictoryPie} from 'victory';

const TimerChart = () => {
    const [time, setTime] = useState(0);
    const [chartData,setChartData] = useState([
        { x: ' ', y: 0 },
        { x: ' ', y: 100 },
    ]);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(time+1);
            setChartData([
                { x: ' ', y: time },
                { x: ' ', y: 100-time}
            ]);
        },60000);
        
        return(()=>{
            clearInterval(timer);
        })

    },[time]);

    return (
        <VictoryPie data={chartData} innerRadius={120} animate={{duration: 1000}}/>
    );
};

export default TimerChart;