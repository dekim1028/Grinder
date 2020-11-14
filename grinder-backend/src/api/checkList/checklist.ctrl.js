import CheckList from '../../models/checkList';

export const getChecklistById = async (ctx, next) =>{
    const {id} = ctx.params;

    try{
        let checklist = await CheckList.findByObjectId(id);

        //체크리스트가 존재하지 않을 때
        if(!checklist){
            checklist = new CheckList({
                plannerId:id,
                list:null
            });
        
            try{
                await checklist.save();
            }catch(e){
                ctx.throw(500,e);
            }
        }

        ctx.state.checklist = checklist;
        
        return next();
    }catch(e){
        ctx.throw(500,e);
    }
}

/*
    GET /api/checklist/
*/
export const read = async ctx => {
    ctx.body = ctx.state.checklist;
 };

 /*
    PATCH /api/checklist/
*/
export const update = async ctx => {
    const {_id} = ctx.request.body;
    
    try{
        const checklist = await CheckList.findByIdAndUpdate(_id, ctx.request.body, {
            new:true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
            //false일떄는 업데이트되기전의 데이터를 반환합니다.
        }).exec();
        
        if(!checklist){
            ctx.status = 404;
            return;
        }
        ctx.body = checklist;
    }catch(e){
        ctx.throw(500,e);
    }
};