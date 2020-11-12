import React, { useEffect } from 'react';
import Planner from '../../components/plan/Planner';
import { useSelector, useDispatch } from 'react-redux';
import { readPlanner } from '../../modules/planner';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import {changeField, updatePlanner} from '../../modules/planner';

const PlannerContainer = ({match}) => {
    const dispatch = useDispatch();
    const {planner,plannerError,loading} = useSelector(({planner,loading})=>({
        planner:planner.planner,
        plannerError:planner.plannerError,
        loading:loading['planner/READ_PLANNER'],
    }));

    useEffect(()=>{
        let {date} = match.params;
        if(!date){
            date = moment(new Date()).format('YYYY-MM-DD');
        }
        dispatch(readPlanner(date));
    },[dispatch,match.params]);

    const onChangeText = async e => {
        const {name,value}=e.target;
        await dispatch(changeField({
            key:name,
            value,
        }));

        await dispatch(updatePlanner(planner));
    };

    return (
        <Planner planner={planner} plannerError={plannerError} loading={loading} onChangeText={onChangeText}/>
    );
};

export default withRouter(PlannerContainer);