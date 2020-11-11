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

const OverviewChart = () => {
    const chartStyle ={
        parent:{
            height:"90%"
        },
        labels:{
            fontSize: 20
        } 
    };
    const colorScale=["white", "orange", "gold", "tomato"];

    const [chartData,setChartData] = useState([
        { x: ' ', y: 100 },
        { x: "수학", y: 0 },
        { x: "영어", y: 0 },
        { x: "국어", y: 0 }
    ]);

    useEffect(()=>{
        setChartData([
            { x: ' ', y: 0 },
            { x: "수학", y: 35 },
            { x: "영어", y: 40 },
            { x: "국어", y: 55 }
        ]);
    },[]);

    return (
        <ChartBlock>
            <Chart>
                <VictoryPie style={chartStyle} data={chartData} colorScale={colorScale} innerRadius={80} animate={{duration: 2000}}/>
                <h2>Yesterday</h2>
            </Chart>
            <Chart>
            <VictoryPie style={chartStyle} data={chartData} colorScale={colorScale} innerRadius={80} animate={{duration: 2000}}/>
                <h2>Today</h2>
            </Chart>
            <Chart>
                <VictoryPie style={chartStyle} data={chartData} colorScale={colorScale} innerRadius={80} animate={{duration: 2000}}/>
                <h2>Weekly</h2>
            </Chart>
        </ChartBlock>
    );
};

export default OverviewChart;