import React, { useEffect,useState,useCallback } from 'react';
import Planner from '../../components/plan/Planner';
import { useSelector, useDispatch } from 'react-redux';
import { readPlanner } from '../../modules/planner';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { readChecklist } from '../../modules/checkList';
import {initializeForm, changeField, updatePlanner} from '../../modules/planner';

const PlannerContainer = ({history,match}) => {
    const dispatch = useDispatch();
    const [plannerDate, setPlannerDate] = useState(new Date());

    const {planner,plannerError,checklist,loading} = useSelector(({planner,checkList,loading})=>({
        planner:planner.planner,
        plannerError:planner.plannerError,
        checklist:checkList.checklist,
        loading:loading['planner/READ_PLANNER'],
    }));

    const onChangeText = e => {
        const {name,value}=e.target;
        dispatch(changeField({
            key:name,
            value,
        }));
    };

    const onChangeStudyTime = useCallback(value => {
        if(planner){
            dispatch(changeField({
                key:"studyTime",
                value,
            }));
        }
    },[planner,dispatch]);

    const onChangeDate = (date) =>{
        dispatch(readPlanner(date));
    };

    const onSave = () =>{
        dispatch(updatePlanner(planner));
        alert("저장되었습니다.");
    }

    useEffect(()=>{
        let {date} = match.params;
        if(!date){
            date = moment(new Date()).format('YYYY-MM-DD');
        }
        dispatch(readPlanner(date));
    },[dispatch,match.params]);

    useEffect(()=>{
        if(planner){
            const id = planner._id;
            dispatch(readChecklist(id));
        }
    },[dispatch,planner]);

    useEffect(()=>{
        if(checklist){
            const {list} = checklist;
            let studyTime = list.filter(item=>
                item.startTime!==""&&item.endTime!==""
            ).reduce((ac,cu)=>{
                const plannerDateText = moment(plannerDate).format("yyyy-MM-DD");
                const startTime = new Date(plannerDateText+" "+cu.startTime).getTime();
                const endTime = new Date(plannerDateText+" "+cu.endTime).getTime();
                return ac + (endTime-startTime);
            },0);

            let hour = parseInt(studyTime/1000/60/60);
            hour = hour>0?`${hour}시간 `:'';
            let minute = studyTime/1000/60%60;
            minute = minute>0?`${minute}분`:'';
            onChangeStudyTime(hour+minute);
        }
    },[checklist,plannerDate,onChangeStudyTime]);

    useEffect(()=>{
        return ()=>{
            dispatch(initializeForm());
        }
    },[dispatch]);

    return (
        <Planner
            planner={planner}
            plannerError={plannerError}
            loading={loading}
            plannerDate={plannerDate}
            onChangeText={onChangeText}
            onChangeDate={onChangeDate}
            onSave={onSave}
        />
    );
};

export default withRouter(PlannerContainer);