import Settings from '../../models/Settings';

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
                        color:"#ff6347",
                        subject:"국어"
                    },
                    {
                        color:"#ffa500",
                        subject:"수학"
                    },
                    {
                        color:"#ffd700",
                        subject:"영어"
                    },
                    {
                        color:"#0404B4",
                        subject:"과학"
                    },
                    {
                        color:"#31B404",
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

    console.log(id,ctx.request.body);
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