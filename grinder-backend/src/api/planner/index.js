import Router from 'koa-router';
import * as plannerCtrl from './planner.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const palnner = new Router();

palnner.get('/', checkLoggedIn, plannerCtrl.getPlannerByDate, plannerCtrl.read);
palnner.patch('/', checkLoggedIn, plannerCtrl.update);

export default palnner;