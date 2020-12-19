import Router from 'koa-router';
import * as settingsCtrl from './settings.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const settings = new Router();

settings.get(
	'/:id',
	checkLoggedIn,
	settingsCtrl.getSettingsById,
	settingsCtrl.readSettings,
);
settings.post('/:id', checkLoggedIn, settingsCtrl.addSettings);
settings.delete('/:id/:categoryId', checkLoggedIn, settingsCtrl.deleteSettings);

export default settings;
