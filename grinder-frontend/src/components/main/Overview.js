import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {BiPin} from 'react-icons/bi';
import {VictoryPie} from 'victory';

const OverviewBlock = styled.div`
    width:700px;
`;

const Title =styled.h1`
    font-weight: 500;
    font-size: 16px;
    svg{
        font-size:20px;
    }
    span{
        vertical-align: top;
    }
`;

const ContentBlock = styled.div`
    margin-top:30px;
`;

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

const PlansBlock = styled.div`
`;

const Plan = styled.div`
    width: 100%;
    display:inline-block;
    border: 1px solid #D8D8D8;
    border-radius: 15px;
    padding: 15px 25px;
    margin:0 10px 10px 0;

    .subject{
        font-size: 15px;
        margin: 0 0 20px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const Category = styled.div`
    display:flex;
    align-items:baseline;
    font-size: 13px;

    .categoryColor{
        width:11px;
        height:11px;
        background:orange;
        border-radius:50%;
        margin-right:5px;
    }

`;

const Overview = () => {
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
        <OverviewBlock>
            <ContentBlock>
                <Title><BiPin/><span>Study Time Statistics</span></Title>
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
            </ContentBlock>
            <ContentBlock>
                <Title><BiPin/><span>Today's Plans</span></Title>
                <PlansBlock>
                    <Plan>
                        <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                        <Category>
                            <div className="categoryColor"></div>
                            <div>수학</div>
                        </Category>
                    </Plan>
                    <Plan>
                        <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                        <Category>
                            <div className="categoryColor"></div>
                            <div>수학</div>
                        </Category>
                    </Plan>
                    <Plan>
                        <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                        <Category>
                            <div className="categoryColor"></div>
                            <div>수학</div>
                        </Category>
                    </Plan>
                    <Plan>
                        <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                        <Category>
                            <div className="categoryColor"></div>
                            <div>수학</div>
                        </Category>
                    </Plan>
                    <Plan>
                        <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                        <Category>
                            <div className="categoryColor"></div>
                            <div>수학</div>
                        </Category>
                    </Plan>
                    <Plan>
                        <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                        <Category>
                            <div className="categoryColor"></div>
                            <div>수학</div>
                        </Category>
                    </Plan>
                    <Plan>
                        <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                        <Category>
                            <div className="categoryColor"></div>
                            <div>수학</div>
                        </Category>
                    </Plan>
                </PlansBlock>
            </ContentBlock>
        </OverviewBlock>
    );
};

export default Overview;