import Router from 'koa-router';
import auth from './auth';
import palnner from './planner';
import checklist from './checkList';
import settings from './settings';

const api = new Router();

api.use('/auth',auth.routes());
api.use('/planner',palnner.routes());
api.use('/checklist',checklist.routes());
api.use('/settings',settings.routes());

//라우터를 내보냅니다.
export default api;