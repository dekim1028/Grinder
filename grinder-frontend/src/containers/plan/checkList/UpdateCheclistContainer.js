import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import UpdateChecklist from '../../../components/plan/checkList/UpdateChecklist';
import { changeUpdateTarget, updateChecklistItem } from '../../../modules/checkList';

const UpdateCheclistContainer = ({onConfirm}) => {
    const dispatch = useDispatch();

    const {checklist,updateTarget,settings} = useSelector(({checkList,settings})=>({
        checklist:checkList.checklist,
        updateTarget:checkList.updateTarget,
        settings:settings.settings
    }));

    const onChange = e =>{
        const {name,value} = e.target;

        if(name==="subject"){
            const {SubjectCategory} = settings;
            const selected = SubjectCategory.filter(item=>item._id===value)[0];
            const {_id,color,subject} = selected;
            dispatch(changeUpdateTarget({key:"subjectCategoryId",value:_id}));
            dispatch(changeUpdateTarget({key:"color",value:color}));
            dispatch(changeUpdateTarget({key:"subject",value:subject}));
        }else{
            dispatch(changeUpdateTarget({
                key:name,
                value
            }));
        }
    };

    const onChangeStartTime = time =>{
        dispatch(changeUpdateTarget({
            key:"startTime",
            value:time
        }));
    };

    const onChangeEndTime = time =>{
        dispatch(changeUpdateTarget({
            key:"endTime",
            value:time
        }));
    };

    const onUpdate = () =>{

        if(updateTarget.startTime==="" && updateTarget.endTime!==""){
            alert("공부 시작시간을 입력해주세요");
            return;
        }

        if(updateTarget.startTime!=="" && updateTarget.endTime!==""){
            const startDateTime = new Date(moment(new Date()).format("yyyy.MM.DD")+" "+updateTarget.startTime).getTime();
            const endDateTime = new Date(moment(new Date()).format("yyyy.MM.DD")+" "+updateTarget.endTime).getTime();

            if(endDateTime-startDateTime<0){
                alert("종료시간이 시작시간보다 빠를 수 없습니다.");
                dispatch(changeUpdateTarget({key:"endTime",value:""}));
                return;
            }
        }
        
        dispatch(updateChecklistItem({
            id:checklist._id,
            item:updateTarget
        }));
        alert("수정되었습니다.");
        onConfirm();
    };

    return (
        <UpdateChecklist
            target={updateTarget}
            subjectCategory={settings.SubjectCategory}
            onChange={onChange}
            onChangeStartTime={onChangeStartTime}
            onChangeEndTime={onChangeEndTime}
            onUpdate={onUpdate}
        />
    );
};

export default UpdateCheclistContainer;