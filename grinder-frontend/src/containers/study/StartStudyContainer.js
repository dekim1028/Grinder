import React from 'react';
import StartStudy from '../../components/study/StartStudy';
import { useSelector } from 'react-redux';

const StartStudyContainer = () => {
    const {studyTarget} = useSelector(({study})=>({
        studyTarget:study.studyTarget
    }));

    return (
        <StartStudy studyTarget={studyTarget}/>
    );
};

export default StartStudyContainer;