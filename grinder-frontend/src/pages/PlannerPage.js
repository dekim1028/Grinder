import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import PlannerContainer from '../containers/plan/PlannerContainer';

const PlannerPage = () => {
    return (
        <>
            <HeaderContainer/>
            <Responsive>
                <PlannerContainer/>
            </Responsive>
        </>
    );
};

export default PlannerPage;