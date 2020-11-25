import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OverviewPlan from '../../../components/main/overview/OverviewPlan';
import { readOverviewPlan } from '../../../modules/overview';
import { setStudyTarget } from '../../../modules/study';

const OverviewPlanContainer = ({history}) => {
    const dispatch = useDispatch();
    const {list,studyTarget} = useSelector(({overview,study})=>({
        list : overview.list,
        studyTarget:study.studyTarget,
    }));

    const onClick = studyTarget =>{
        dispatch(setStudyTarget(studyTarget));
        history.push('/study');
    };

    useEffect(()=>{
        dispatch(readOverviewPlan());
    },[dispatch]);

    return (
        <OverviewPlan plan={list} onClick={onClick} studyTarget={studyTarget}/>
    );
};

export default withRouter(OverviewPlanContainer);