import React, { useEffect } from 'react';
import OverviewPlan from '../../../components/main/overview/OverviewPlan';
import { useSelector, useDispatch } from 'react-redux';
import { readOverviewPlan } from '../../../modules/overview';
import study, { setStudyTarget } from '../../../modules/study';

const OverviewPlanContainer = () => {
    const dispatch = useDispatch();
    const {list,studyTarget} = useSelector(({overview,study})=>({
        list : overview.list,
        studyTarget:study.studyTarget,
    }));

    const onClick = studyTarget =>{
        dispatch(setStudyTarget(studyTarget));
    };

    useEffect(()=>{
        dispatch(readOverviewPlan());
    },[dispatch]);

    return (
        <OverviewPlan plan={list} onClick={onClick} studyTarget={studyTarget}/>
    );
};

export default OverviewPlanContainer;