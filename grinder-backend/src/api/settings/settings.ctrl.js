import Settings from '../../models/settings';

export const getSettingsById = async (ctx, next) =>{
    const {id} = ctx.params;

    try{
        let settings = await Settings.findByUserId(id);

        //체크리스트가 존재하지 않을 때
        if(!settings){
            settings = new Settings({
                user: ctx.state.user,
                SubjectCategory:[
                    {
                        color:"#F5A9A9",
                        subject:"국어"
                    },
                    {
                        color:"#F5D0A9",
                        subject:"수학"
                    },
                    {
                        color:"#F2F5A9",
                        subject:"영어"
                    },
                    {
                        color:"#A9F5F2",
                        subject:"과학"
                    },
                    {
                        color:"#A9F5A9",
                        subject:"한국사"
                    }
                ]
            });
        
            try{
                await settings.save();
            }catch(e){
                ctx.throw(500,e);
            }
        }

        ctx.state.settings = settings;
        
        return next();
    }catch(e){
        ctx.throw(500,e);
    }
}

/*
    GET /api/settings/:id
*/
export const readSettings = async ctx => {
    ctx.body = ctx.state.settings;
};

/*
    POST /api/settings/:id
*/
export const addSettings = async ctx =>{
    const {id} = ctx.params;
    
    try{
        const SubjectCategory = await Settings.findOneAndUpdate(
            { "_id": id},
            { 
                "$push": {
                    "SubjectCategory": ctx.request.body
                }
            },
            {new:true}
        );
        
        if(!SubjectCategory){
            ctx.status = 404;
            return;
        }
        ctx.body = SubjectCategory;
    }catch(e){
        ctx.throw(500,e);
    }
}

/*
    DELETE /api/settings/:id
*/
export const deleteSettings = async ctx =>{
    const {id,categoryId} = ctx.params;

    try{
        const SubjectCategory = await Settings.findOneAndUpdate(
            { "_id": id},
            { 
                "$pull": {
                    "SubjectCategory": {"_id": categoryId}
                }
            },
            {new:true}
        );
        
        if(!SubjectCategory){
            ctx.status = 404;
            return;
        }
        ctx.body = SubjectCategory;
    }catch(e){
        ctx.throw(500,e);
    }
}