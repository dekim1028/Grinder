import React from 'react';
import styled from 'styled-components';
import {BiPin} from 'react-icons/bi';
import Plan from '../plan/Plan';
import OverviewChart from '../chart/OverviewChart';

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

const Overview = () => {
    return (
        <OverviewBlock>
            <ContentBlock>
                <Title><BiPin/><span>Study Time Statistics</span></Title>
                <OverviewChart/>
            </ContentBlock>
            <ContentBlock>
                <Title><BiPin/><span>Today's Plans</span></Title>
                <Plan/>
            </ContentBlock>
        </OverviewBlock>
    );
};

export default Overview;