import React from 'react';
import styled from 'styled-components';
import {BiPin} from 'react-icons/bi';
import SubjectCategoryContainer from '../../../containers/main/settings/subjectCategory/SubjectCategoryContainer';

const SettingsBlock = styled.div`
    width:700px;
    @media (max-width:768px){
        width: 100%;
    }
`;

const ContentBlock = styled.div`
    margin-top:30px;
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

const Settings = ({settings}) => {

    if(!settings) return null;
    return (
        <SettingsBlock>
            <ContentBlock>
                <Title><BiPin/><span>Subject Category</span></Title>
                <SubjectCategoryContainer/>
            </ContentBlock>
        </SettingsBlock>
    );
};

export default Settings;