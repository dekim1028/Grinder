import CheckList from '../../models/checkList';
import Planner from '../../models/planner';
import moment from 'moment';

/*
    PATCH /api/study/
*/
export const updateStudyTime = async ctx =>{
    const {userid} = ctx.state.user;
    const {studyingInfo} = ctx.request.body;
    const {id,startTime,endTime} = studyingInfo;

    const date = moment(new Date()).format("YYYY-MM-DD");

    try{
        const {_id} = await Planner.findIdByDate(date,userid);
        let list = await CheckList.findByObjectId(_id);

        const checklist = await CheckList.findByIdAndUpdate(
            list._id,
            { $set:{
                "list.$[w].startTime": startTime,
                "list.$[w].endTime": endTime
                }
            }, 
            {
                arrayFilters: [{
                    "w._id": id
                 }],
                new:true,
            }
        ).exec();

        if(!checklist){
            ctx.status = 404;
            return;
        }
        ctx.body = checklist;

    }catch(e){
        ctx.throw(500,e);
    }
};