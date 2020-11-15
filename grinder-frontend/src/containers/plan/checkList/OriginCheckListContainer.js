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
    
    const onVisible = id => {
        setVisible(!visible);
        setTarget(id);
    };

    return (
        <>
            <OriginCheckList checklist={checklist} onVisible={onVisible}/>
            <WorkSelectionModalContiner visible={visible} target={target} onVisible={onVisible}/>
        </>
    );
};

export default OriginCheckListContainer;