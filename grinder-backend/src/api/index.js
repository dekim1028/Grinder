import Router from 'koa-router';
import auth from './auth';
import palnner from './planner';

const api = new Router();

api.use('/auth',auth.routes());
api.use('/planner',palnner.routes());

//라우터를 내보냅니다.
export default api;