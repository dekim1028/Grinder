import React from 'react';
import UpdateChecklist from '../../../components/plan/checkList/UpdateChecklist';
import { useDispatch, useSelector } from 'react-redux';
import { changeUpdateTarget, updateChecklistItem } from '../../../modules/checkList';

const UpdateCheclistContainer = ({onConfirm}) => {
    const dispatch = useDispatch();

    const {checklist,updateTarget} = useSelector(({checkList})=>({
        checklist:checkList.checklist,
        updateTarget:checkList.updateTarget
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

    return (
        <UpdateChecklist target={updateTarget} onChange={onChange} onUpdate={onUpdate}/>
    );
};

export default UpdateCheclistContainer;