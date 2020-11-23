import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {VictoryPie} from 'victory';

const ChartBlock = styled.div`
    display:flex;
    justify-content: space-around;
`;

const Chart = styled.div`
    width:200px;
    height:200px;
    h2{
        margin: 0;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
    }
`;

const OverviewChart = ({chart}) => {
    const chartStyle ={
        parent:{
            height:"90%"
        },
        labels:{
            fontSize: 20
        } 
    };

    const [yesterdayChart,setYesterdayChart] = useState({
        data:[],
        color:[],
    });

    const [todayChart,setTodayChart] = useState({
        data:[],
        color:[],
    });

    const [weeklyChart,setWeeklyChart] = useState({
        data:[],
        color:[],
    });

    const initializeChart = (chart)=>{
        const temp = JSON.parse(JSON.stringify(chart));
        temp.data.map(item=>{
            if(item.x===" "){
                item.y=100;
            }else{
                item.y=0;
            }
            return item;
        });

        return temp;
    };

    useEffect(()=>{
        if(chart){
            const {yesterday,today,weekly} = chart;

            let temp = initializeChart(yesterday);
            setYesterdayChart(temp);

            temp = initializeChart(today);
            setTodayChart(temp);

            temp = initializeChart(weekly);
            setWeeklyChart(temp);

            setTimeout(() => {
                setYesterdayChart(yesterday);
                setTodayChart(today);
                setWeeklyChart(weekly);
            },1);
        }
    },[chart]);

    return (
        <ChartBlock>
            <Chart>
                <VictoryPie style={chartStyle} data={yesterdayChart.data} colorScale={yesterdayChart.color} innerRadius={80} animate={{duration: 2000}}/>
                <h2>Yesterday</h2>
            </Chart>
            <Chart>
                <VictoryPie style={chartStyle} data={todayChart.data} colorScale={todayChart.color} innerRadius={80} animate={{duration: 2000}}/>
                <h2>Today</h2>
            </Chart>
            <Chart>
                <VictoryPie style={chartStyle} data={weeklyChart.data} colorScale={weeklyChart.color} innerRadius={80} animate={{duration: 2000}}/>
                <h2>Weekly</h2>
            </Chart>
        </ChartBlock>
    );
};

export default OverviewChart;