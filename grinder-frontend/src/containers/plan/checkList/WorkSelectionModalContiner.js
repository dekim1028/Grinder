import React, { useState, useEffect } from 'react';
import WorkSelectionModal from '../../../components/plan/checkList/WorkSelectionModal';
import { useDispatch } from 'react-redux';
import { updateChecklist } from '../../../modules/checklist';

const WorkSelectionModalContiner = ({visible,checklist,target,onClick}) => {
    const dispatch = useDispatch();
    const [status,setStatus]=useState('');

    const onUpdate = () =>{
        setStatus('update');
    };

    const onDelete = () =>{
        setStatus('delete');
        const {list} = checklist;
        const newArr = list.filter(item=>{
            return item._id!==target;
        });
        checklist.list = newArr;
        dispatch(updateChecklist(checklist));
    };

    const onConfirm = () =>{
        if(status==='update'){

        }else{

        }
        setStatus('');
        onClick('');
    }

    return (
        <WorkSelectionModal visible={visible} status={status} onClick={onClick} onUpdate={onUpdate} onDelete={onDelete} onConfirm={onConfirm}/>
    );
};

export default WorkSelectionModalContiner;