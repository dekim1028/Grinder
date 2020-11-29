import moment from 'moment';
import CheckList from '../../models/checkList';
import Planner from '../../models/planner';

/*
    GET /api/overview/
*/
export const readOverviewPlan = async ctx =>{
    const {userid} = ctx.state.user;
    const date = moment(new Date()).format("YYYY-MM-DD");

    try{
        const planner = await Planner.findIdByDate(date,userid);

        //플래너가 존재하지 않을 때
        if(!planner){
            ctx.state.list = [];
        }else{
            const {_id} = planner;
            const {list} = await CheckList.findByObjectId(_id);
            ctx.state.list = list;
        }

        ctx.body = ctx.state.list;

    }catch(e){
        ctx.throw(500,e);
    }
}

function setTotalTime(list,date){
    const customList = list.reduce((total, value) => {
        let studyTime = 0;
        
        if(value.startTime!=='' && value.endTime!==''){
            studyTime = new Date(`${date} ${value.endTime}`).getTime() - new Date(`${date} ${value.startTime}`).getTime();
            
            if(!total[value.subjectCategoryId]){
                total[value.subjectCategoryId] = {
                    studyTime:studyTime===0?1:studyTime,
                    color : value.color,
                    subject : value.subject
                };
            }else{
                total[value.subjectCategoryId]['studyTime'] += studyTime;
            } 
        }
        return total;
   }, {});

   const totalStudyTime = Object.values(customList).reduce((ac,cu)=>{
       return ac+cu.studyTime;
    },0);

    let chart = {
        data:[{ x: ' ', y: 0 }],
        color:['white'],
    };
    
    Object.keys(customList).forEach(key=>{
        chart.data.push({
            x: customList[key].subject,
            y: customList[key].studyTime/totalStudyTime * 100,
        });

        chart.color.push(customList[key].color);
    });
    
   return chart;
}

/*
    GET /api/overview/chart
*/
export const readOverviewChart = async ctx =>{
    const {userid} = ctx.state.user;
    const date = new Date().getTime();
    const yesterday = moment(date - (1 * 24 * 60 * 60 * 1000)).format("YYYY-MM-DD");
    const today = moment(date).format("YYYY-MM-DD");

    try{
        const chart = {
            yesterday:null,
            today:null,
            weekly:null,
        };

        //1. yesterday
        let planner = await Planner.findIdByDate(yesterday,userid);

        //플래너가 존재할때
        if(planner){
            const yesterdayId = planner._id;

            const {list} = await CheckList.findByObjectId(yesterdayId);
            const yesterdayOverview = setTotalTime(list,yesterday);

            chart.yesterday = yesterdayOverview;
        }else{
            chart.yesterday = {
                data:[{ x: ' ', y: 0 }],
                color:['white'],
            };
        }

        //2. today
        planner = await Planner.findIdByDate(today,userid);

        //플래너가 존재할때
        if(planner){
            const todayId = planner._id;
            const {list} = await CheckList.findByObjectId(todayId);
            const todayOverview = setTotalTime(list,today);

            chart.today = todayOverview;
        }else{
            chart.today = {
                data:[{ x: ' ', y: 0 }],
                color:['white'],
            };
        }

        //3.weekly
        planner = await Planner.findWeeklyPlanner(today,userid);
        
        if(planner){
            const weeklyIds = [];
            planner.forEach(ele => {
                weeklyIds.push(ele._id);
            });

            const checklist = await CheckList.findByObjectIdArr(weeklyIds);

            let list = [];
            checklist.forEach(ele=>{
                list = list.concat(ele.list);
            });

            const weeklyOverview = setTotalTime(list,today);

            chart.weekly = weeklyOverview;
        }else{
            chart.weekly = {
                data:[{ x: ' ', y: 0 }],
                color:['white'],
            };
        }

        ctx.state.chart = chart;
        ctx.body = ctx.state.chart;

    }catch(e){
        ctx.throw(500,e);
    }
}