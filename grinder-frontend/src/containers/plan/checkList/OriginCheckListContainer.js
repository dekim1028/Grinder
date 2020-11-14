import React from 'react';
import OriginCheckList from '../../../components/plan/checkList/OriginCheckList';

const OriginCheckListContainer = ({checkList}) => {

    const onClick = () =>{

    }

    return (
        <OriginCheckList checkList={checkList} onClick={onClick}/>
    );
};

export default OriginCheckListContainer;