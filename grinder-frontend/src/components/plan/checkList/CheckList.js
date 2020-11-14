import React from 'react';
import styled from 'styled-components';
import OriginCheckListContainer from '../../../containers/plan/checkList/OriginCheckListContainer';
import NewCheckListContainer from '../../../containers/plan/checkList/NewCheckListContainer';

const CheckListBlock =styled.div`
    font-size: 15px;
    margin-top:15px;
`;

const CheckList = () => {
    return (
        <CheckListBlock>
            <OriginCheckListContainer/>
            <NewCheckListContainer/>
        </CheckListBlock>
    );
};

export default CheckList;