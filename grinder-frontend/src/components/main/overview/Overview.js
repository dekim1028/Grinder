import React from 'react';
import styled from 'styled-components';
import {BiPin} from 'react-icons/bi';
import OverviewPlanContainer from '../../../containers/main/overview/OverviewPlanContainer';
import OverviewChartContainer from '../../../containers/main/overview/OverviewChartContainer';

const OverviewBlock = styled.div`
    width:700px;
    @media (max-width:768px){
        width: 100%;
    }
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

const Overview = () => {
    return (
        <OverviewBlock>
            <ContentBlock>
                <Title><BiPin/><span>Study Time Statistics</span></Title>
                <OverviewChartContainer/>
            </ContentBlock>
            <ContentBlock>
                <Title><BiPin/><span>Today's Plans</span></Title>
                <OverviewPlanContainer/>
            </ContentBlock>
        </OverviewBlock>
    );
};

export default Overview;