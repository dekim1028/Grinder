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
    .subject{
        font-size: 17px;
        color: #585858;
    }

    .content{
        width: fit-content;
        max-width: 100%;
        font-size: 20px;
        margin: 0 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .startTime,.studyTime{
        font-size: 20px;
        color: #585858;
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
                        <h1 className="subject">[ {studyTarget.subject} ]</h1>
                        <h1 className="content" style={{borderBottomColor:studyTarget.color,boxShadow:`inset 0 -10px 0 ${studyTarget.color}`}}>{studyTarget.content}</h1>
                    </Content>
                ):(
                    <Content>
                        <h1 className="startTime">시작시간 : {studyingInfo.startTime}</h1>
                        <h1 className="studyTime">공부시간 : {time}분</h1>
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