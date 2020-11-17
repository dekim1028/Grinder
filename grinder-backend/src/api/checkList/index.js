import Router from 'koa-router';
import * as checklistCtrl from './checklist.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const checklist = new Router();

checklist.get('/:id', checkLoggedIn, checklistCtrl.getChecklistById, checklistCtrl.read);
checklist.post('/:id', checkLoggedIn, checklistCtrl.addChecklistItem);
checklist.patch('/:id', checkLoggedIn, checklistCtrl.updateChecklistItem);
checklist.delete('/:id/:itemId', checkLoggedIn, checklistCtrl.deleteChecklistItem);

export default checklist;