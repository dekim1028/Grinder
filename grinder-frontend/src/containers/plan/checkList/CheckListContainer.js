import React from 'react';
import CheckList from '../../../components/plan/checkList/CheckList';
import { useSelector } from 'react-redux';

const CheckListContainer = () => {
    const {checkList} = useSelector(({planner})=>({
        checkList:planner.planner.checkList
    }));

    return (
        <CheckList checkList={checkList}/>
    );
};

export default CheckListContainer;