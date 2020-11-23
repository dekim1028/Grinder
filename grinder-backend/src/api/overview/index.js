import Router from 'koa-router';
import * as overviewCtrl from './overview.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const overview = new Router();

overview.get('/', checkLoggedIn, overviewCtrl.readOverview);

export default overview;