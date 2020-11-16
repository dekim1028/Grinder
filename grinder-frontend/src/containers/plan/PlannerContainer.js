import React, { useEffect,useState } from 'react';
import Planner from '../../components/plan/Planner';
import { useSelector, useDispatch } from 'react-redux';
import { readPlanner } from '../../modules/planner';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import {initializeForm, changeField, updatePlanner} from '../../modules/planner';
import { readChecklist } from '../../modules/checkList';

const PlannerContainer = ({history,match}) => {
    const dispatch = useDispatch();
    const [plannerDate, setPlannerDate] = useState(new Date());

    const {planner,plannerError,loading} = useSelector(({planner,loading})=>({
        planner:planner.planner,
        plannerError:planner.plannerError,
        loading:loading['planner/READ_PLANNER'],
    }));

    const onChangeText = e => {
        const {name,value}=e.target;
        dispatch(changeField({
            key:name,
            value,
        }));
    };

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