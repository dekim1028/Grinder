import React, { useState } from 'react';
import WorkSelectionModal from '../../../components/plan/checkList/WorkSelectionModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChecklistItem } from '../../../modules/checkList';

const WorkSelectionModalContiner = ({visible,onVisible}) => {
    const dispatch = useDispatch();
    const [status,setStatus] = useState('');

    const {updateTarget,checklist} = useSelector(({checkList})=>({
        checklist:checkList.checklist,
        updateTarget:checkList.updateTarget
    }));

    const onDelete = () =>{
       dispatch(deleteChecklistItem({
           id:checklist._id,
           itemId:updateTarget._id
       }));
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