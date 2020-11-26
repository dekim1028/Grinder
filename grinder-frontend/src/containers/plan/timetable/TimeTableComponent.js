import React, { useEffect, useState } from 'react';
import TimeTable from '../../../components/plan/timetable/TimeTable';
import { useSelector } from 'react-redux';

const TimeTableComponent = () => {
    const [timeTableList,setTimeTableList] = useState([]);

    const {checklist,planner} = useSelector(({checkList,planner})=>({
        checklist:checkList.checklist,
        planner:planner.planner
    }));

    useEffect(()=>{
        if(checklist){
            const temp = JSON.parse(JSON.stringify(checklist));
            const {list} = temp;
            let newList = list.filter(item=>
                item.startTime!==""&&item.endTime!==""
            ).map(item=>{
                item.startDateTime = new Date(planner.date+" "+item.startTime);
                item.endDateTime = new Date(planner.date+" "+item.endTime);
                return item;
            }).sort((a,b)=>{
                return a.startDateTime.getTime()-b.startDateTime.getTime();
            });

            let newTimeTableList = [];
            let checkMultiLline = 0;
            for(let i=0;i<newList.length;i++){
                const sTime = newList[i].startDateTime;
                const eTime = newList[i].endDateTime;

                let interval = (eTime.getTime()-sTime.getTime())/1000/60;
                let top = sTime.getHours();
                let left = sTime.getMinutes();

                top = 27*top+3;
                if(i>0){
                    top = top-(20*(i-1))-(19.7*(checkMultiLline))-20;
                }
                
                if(sTime.getHours()===eTime.getHours() || (sTime.getHours()===eTime.getHours()-1 && sTime.getMinutes()===0 && eTime.getMinutes()===0)){
                    newTimeTableList.push({
                        ...newList[i],
                        top,
                        left,
                        width:interval
                    });
                }else{
                    let cnt = 0;
                    while(interval){
                        let width = 0;
                        if(cnt>0&&left===0){
                            checkMultiLline++;
                            width = interval>60?60:interval;
                        }else{
                            width = 60-left;
                        }

                        newTimeTableList.push({
                            ...newList[i],
                            top,
                            left,
                            width
                        });

                        interval-=width;
                        top+=7;
                        left=0;
                        cnt++;
                    }
                }
            }
            setTimeTableList(newTimeTableList);
        }
    },[checklist,planner.date]);

    return (
        <TimeTable timeTableList={timeTableList}/>
    );
};

export default TimeTableComponent;