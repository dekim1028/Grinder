import React, { useState } from 'react';
import WorkSelectionModal from '../../../components/plan/checkList/WorkSelectionModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateChecklist } from '../../../modules/checkList';

const WorkSelectionModalContiner = ({visible,onVisible}) => {
    const dispatch = useDispatch();
    const [status,setStatus] = useState('');

    const {updateTarget,checklist} = useSelector(({checkList})=>({
        checklist:checkList.checklist,
        updateTarget:checkList.updateTarget
    }));

    const onDelete = () =>{
        const {list} = checklist;
        const newArr = list.filter(item=>{
            return item._id!==updateTarget._id;
        });
        checklist.list = newArr;
        dispatch(updateChecklist(checklist));
    };

    const onConfirm = () =>{
        onVisible('');
        setStatus('');
    };

    const onChangeStatus = type =>{
        setStatus(type);
        if(type==='delete'){
            onDelete();
        }
    };

    return (
        <WorkSelectionModal
            visible={visible}
            status={status}
            onConfirm={onConfirm}
            onChangeStatus={onChangeStatus}
        />
    );
};

export default WorkSelectionModalContiner;