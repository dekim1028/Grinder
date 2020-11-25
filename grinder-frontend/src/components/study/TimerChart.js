import React from 'react';
import {VictoryPie} from 'victory';
import Button from '../common/Button';
import styled from 'styled-components';

const TimeChartBlock = styled.div`
    text-align: center;
`;

const ChartBlock = styled.div`
    height:400px;
`;

const Content = styled.div`
    h1{
        font-size: 20px;
    }
`;

const StudyButton = styled(Button)`
    width:100%;
    margin: 30px auto;
`;

const TimerChart = ({studyTarget,studyingInfo,onStart,onFinish,chartData,start,time}) => {
    if(!studyTarget || !studyingInfo) return null;
    return (
        <TimeChartBlock>
            <ChartBlock>
                <VictoryPie data={chartData} innerRadius={120} animate={{duration: 1000}} colorScale={[studyTarget.color,'#FAFAFA']}/>
            </ChartBlock>
            {
                !start?(
                    <Content>
                        <h1>{studyTarget.subject}</h1>
                        <h1>{studyTarget.content}</h1>
                    </Content>
                ):(
                    <Content>
                        <h1>시작시간 : {studyingInfo.startTime}</h1>
                        <h1>공부시간 : {time}분</h1>
                    </Content>
                )
            }
            {
                !start?(
                    <StudyButton onClick={onStart}>Start</StudyButton>
                ):(
                    <StudyButton onClick={onFinish}>Finish</StudyButton>
                )
            }
            
        </TimeChartBlock>
    );
};

export default TimerChart;