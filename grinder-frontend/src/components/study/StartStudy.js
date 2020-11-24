import React, { useState } from 'react';
import styled from 'styled-components';
import OverviewPlanContainer from '../../containers/main/overview/OverviewPlanContainer';
import Button from '../common/Button';
import cn from 'classnames';
import TimerChartContainer from '../../containers/study/TimerChartContainer';

const StartStudyBlock = styled.div`
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const QuestionBlock = styled.div`
    padding-top:50px;
    transition:0.7s;

    .question{
        margin-bottom:30px;
        text-align: center;
        font-size: 24px;
        color: #424242;
    }

    &.opacity{
        opacity:0;
    }

    &.display{
        display:none;
    }
`;

const NextButton = styled(Button)`
    width: 100%;
    height: 45px;
    margin: 30px auto;
    
    &:disabled{
        background-color: #E6E6E6;
    }
`;

const StartStudy = ({studyTarget}) => {
    const [opacity,setOpicity] = useState(false);
    const [display,setDisplay] = useState(false);

    const [chartOpcity,setChartOpcity] = useState(true);
    const [chartDisplay,setChartDisplay] = useState(true);

    const onClick = () =>{
        setOpicity(!opacity);

        setTimeout(()=>{
            setDisplay(!display);
            setChartDisplay(!chartDisplay);
        },500);

        setTimeout(()=>{
            setChartOpcity(!chartOpcity);
        },600);
    };

    return (
        <StartStudyBlock>
            <QuestionBlock className={cn({opacity,display})}>
                <h1 className="question">진행할 항목을 선택해주세요</h1>
                <OverviewPlanContainer/>
                {
                    studyTarget?(
                        <NextButton onClick={onClick}>다음</NextButton>
                    ):(
                        <NextButton disabled>다음</NextButton>
                    )
                }
            </QuestionBlock>
            <QuestionBlock className={cn({opacity:chartOpcity,display:chartDisplay})}>
                <TimerChartContainer/>
            </QuestionBlock>
        </StartStudyBlock>
    );
};

export default StartStudy;