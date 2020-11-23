import moment from 'moment';
import CheckList from '../../models/checkList';
import Planner from '../../models/planner';

/*
    GET /api/overview/
*/
export const readOverview = async ctx =>{
    const date = moment(new Date()).format("YYYY-MM-DD");

    try{
        const {_id} = await Planner.findIdByDate(date);

        //플래너가 존재하지 않을 때
        if(!_id){
            ctx.state.list = [];
        }else{
            const {list} = await CheckList.findByObjectId(_id);
            ctx.state.list = list;
        }

        ctx.body = ctx.state.list;

    }catch(e){
        ctx.throw(500,e);
    }
}
