import React from 'react';
import styled from 'styled-components';
import TimerChart from '../chart/TimerChart';
import Button from '../common/Button';

const StartStudyBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const QuestionBlock = styled.div`

`;

const NextButton = styled(Button)`

`;

const TimerBlock = styled.div`
    width:500px;
`;

const StartStudy = ({goNextQuestion}) => {
    return (
        <StartStudyBlock>
            <QuestionBlock>

            </QuestionBlock>
        </StartStudyBlock>
    );
};

export default StartStudy;