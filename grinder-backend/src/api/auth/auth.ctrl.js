import Joi from '@hapi/joi';
import User from '../../models/user';

/*
    POST api/auth/signup
    {
        "userid":"velopert",
        "username":"velopert",
        "password":"mypass123"
    }
*/
export const signup = async ctx =>{
    // Request Body 검증하기
    const schema = Joi.object().keys({
        userid:Joi.string()
            .alphanum()
            .min(3)
            .max(20)
            .required(),
        password:Joi.string().required(),
        username:Joi.string().required(),
    });
    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status =400;
        ctx.body=result.error;
        return;
    }

    const {userid,password,username} = ctx.request.body;
    try{
        //userid이 이미 존재하는지 확인
        const exists = await User.findByUserId(userid);
        if(exists){
            ctx.status = 409; //Conflict
            return;
        }

        const user = new User({
            userid,
            username,
        });
        await user.setPassword(password);
        await user.save(); //데이터베이스에 저장

        //응답할 데이터에서 hashedPassword 필드 제거
        ctx.body = user.serialize();

        const token = user.generateToken();
        ctx.cookies.set('access_token',token,{
            makeAge:1000*60*60*24*7, //7일
            httpOnly:true
        });
    }catch(e){
        ctx.throw(500,e);
    }
};

/*
    POST api/auth/login
    {
        "userid":"velopert",
        "password":"mypass123"
    }
*/
export const signin = async ctx =>{
    const {userid, password} = ctx.request.body;

    //userid, password가 없으면 에러
    if(!userid || !password){
        ctx.status = 401; //Unauthorized
        return;
    }

    try{
        const user = await User.findByUserId(userid);
        //계정이 존재하지 않으면 에러처리
        if(!user){
            ctx.status = 401;
            return;
        }
        const valid = await user.checkPassword(password);
        //잘못된 비밀번호
        if(!valid){
            ctx.status = 401;
            return;
        }
        ctx.body = user.serialize();

        const token = user.generateToken();
        ctx.cookies.set('access_token',token,{
            makeAge:1000*60*60*24*7, //7일
            httpOnly:true
        });
    }catch(e){
        ctx.throw(500,e);
    }
};

/*
    GET /api/auth/check
*/
export const check = async ctx =>{
    const {user} =ctx.state;
    if(!user){
        //로그인 중 아님
        ctx.status = 401; //Unauthorized
        return;
    }
    ctx.body = user;
};

/*
    POST /api/auth/logout
*/
export const logout = async ctx =>{
    ctx.cookies.set('access_token');
    ctx.status = 204; //No Content
};