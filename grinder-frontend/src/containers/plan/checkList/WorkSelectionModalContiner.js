import React, { useEffect, useState } from 'react';
import WorkSelectionModal from '../../../components/plan/checkList/WorkSelectionModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateChecklist } from '../../../modules/checklist';

const WorkSelectionModalContiner = ({visible,target,onVisible}) => {
    const dispatch = useDispatch();
    const [targetItem,setTargetItem] = useState(null);
    const [status,setStatus] = useState('');

    const {checklist} = useSelector(({checklist})=>({
        checklist:checklist.checklist
    }));

    const onChange = e =>{
        
    };

    const onUpdate = () =>{

    };

    const onDelete = () =>{
        const {list} = checklist;
        const newArr = list.filter(item=>{
            return item._id!==target;
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

    useEffect(()=>{
        if(checklist){
            const {list} = checklist;
            setTargetItem(list.filter(item=>{
                return item._id===target;
            })[0]);
        }
    },[checklist,target]);

    return (
        <WorkSelectionModal
            visible={visible}
            targetItem={targetItem}
            status={status}
            onChange={onChange}
            onUpdate={onUpdate}
            onConfirm={onConfirm}
            onChangeStatus={onChangeStatus}
        />
    );
};

export default WorkSelectionModalContiner;