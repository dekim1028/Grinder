import Router from 'koa-router';
import * as checklistCtrl from './checklist.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const checklist = new Router();

checklist.get('/:id', checkLoggedIn, checklistCtrl.getChecklistById, checklistCtrl.read);
checklist.patch('/', checkLoggedIn, checklistCtrl.update);

export default checklist;