import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OriginCheckList from '../../../components/plan/checkList/OriginCheckList';
import WorkSelectionModalContiner from './WorkSelectionModalContiner';

const OriginCheckListContainer = () => {
    const [visible,setVisible] = useState(false);
    const [target,setTarget] = useState(null);

    const {checklist} = useSelector(({checklist})=>({
        checklist:checklist.checklist
    }));
    
    const onClick = id => {
        setVisible(!visible);
        setTarget(id);
    };

    return (
        <>
            <OriginCheckList checklist={checklist} onClick={onClick}/>
            <WorkSelectionModalContiner visible={visible} checklist={checklist} target={target} onClick={onClick}/>
        </>
    );
};

export default OriginCheckListContainer;