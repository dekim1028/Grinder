import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import TimerChart from '../../components/study/TimerChart';
import { setStudyingInfo, initializeForm } from '../../modules/study';

const TimerChartContainer = () => {
    const dispatch = useDispatch();
    const [start,setStart] = useState(false);
    const [time, setTime] = useState(0);
    const [chartData,setChartData] = useState([
        { x: ' ', y: 0 },
        { x: ' ', y: 100 },
    ]);

    const {studyTarget,studyingInfo} = useSelector(({study})=>({
        studyTarget:study.studyTarget,
        studyingInfo:study.studyingInfo
    }));

    const onClick=()=>{
        setStart(!start);
    };

    useEffect(()=>{
        let timer = null;
        if(start){
            timer = setInterval(()=>{
                setTime(time+1);
                setChartData([
                    { x: ' ', y: time },
                    { x: ' ', y: 100-time}
                ]);
            },60000);
        }else{
            clearInterval(timer);
        }

        return(()=>{
            clearInterval(timer);
        });
    },[start,time]);

    useEffect(()=>{
        if(start){
            dispatch(setStudyingInfo({
                key:"id",
                value:studyTarget._id
            }));
            dispatch(setStudyingInfo({
                key:"startTime",
                value:moment(new Date()).format('HH:mm')
            }));
        }else{
            if(studyingInfo.startTime){
                dispatch(setStudyingInfo({
                    key:"endTime",
                    value:moment(new Date()).format('HH:mm')
                }));
            }
        }
    },[dispatch,start,studyTarget,studyingInfo]);

    useEffect(()=>{
        return()=>{
            dispatch(initializeForm());
        }
    },[dispatch]);

    return (
        <TimerChart
            studyTarget={studyTarget}
            studyingInfo={studyingInfo}
            onClick={onClick}
            chartData={chartData}
            start={start}
            time={time}
        />
    );
};

export default TimerChartContainer;