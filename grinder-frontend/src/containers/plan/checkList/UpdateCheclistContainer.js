import React,{useEffect} from 'react';
import UpdateChecklist from '../../../components/plan/checkList/UpdateChecklist';
import { useDispatch, useSelector } from 'react-redux';
import { changeUpdateTarget, setUpdateTarget, updateChecklistItem } from '../../../modules/checklist';

const UpdateCheclistContainer = ({targetItem,onConfirm}) => {
    const dispatch = useDispatch();

    const {checklist,updateTarget} = useSelector(({checklist})=>({
        checklist:checklist.checklist,
        updateTarget:checklist.updateTarget
    }));

    const onChange = e =>{
        const {name,value} = e.target;
        dispatch(changeUpdateTarget({
            key:name,
            value
        }));
    };

    const onUpdate = () =>{
        dispatch(updateChecklistItem({
            id:checklist._id,
            item:updateTarget
        }));
        alert("수정되었습니다.");
        onConfirm();
    };

    useEffect(()=>{
        dispatch(setUpdateTarget(targetItem));
    },[dispatch,targetItem])

    return (
        <UpdateChecklist target={updateTarget} onChange={onChange} onUpdate={onUpdate}/>
    );
};

export default UpdateCheclistContainer;