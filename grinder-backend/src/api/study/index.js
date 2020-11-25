import Router from 'koa-router';
import * as studyCtrl from './study.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const study = new Router();

study.patch('/', checkLoggedIn, studyCtrl.updateStudyTime);

export default study;