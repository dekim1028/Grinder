import React, { useEffect } from 'react';
import OverviewPlan from '../../../components/main/overview/OverviewPlan';
import { useSelector, useDispatch } from 'react-redux';
import { readOverviewPlan } from '../../../modules/overview';

const OverviewPlanContainer = () => {
    const dispatch = useDispatch();
    const {list} = useSelector(({overview})=>({
        list : overview.list,
    }));

    useEffect(()=>{
        dispatch(readOverviewPlan());
    },[dispatch]);

    return (
        <OverviewPlan plan={list}/>
    );
};

export default OverviewPlanContainer;