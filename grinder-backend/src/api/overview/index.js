import Router from 'koa-router';
import * as overviewCtrl from './overview.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const overview = new Router();

overview.get('/', checkLoggedIn, overviewCtrl.readOverviewPlan);
overview.get('/chart', checkLoggedIn, overviewCtrl.readOverviewChart);

export default overview;
