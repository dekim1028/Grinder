import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
	createRequestActionTypes,
} from '../lib/createRequestSaga';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import * as settingsAPI from '../lib/api/settings';

const CHANGE_CATEGORY_INPUT = 'settings/CHANGE_CATEGORY_INPUT';
const INITIALIZE_CATEGORY_INPUT = 'settings/INITIALIZE_CATEGORY_INPUT';
const [
	READ_SETTINGS,
	READ_SETTINGS_SUCCESS,
	READ_SETTINGS_FAILURE,
] = createRequestActionTypes('settings/READ_SETTINGS');
const [
	ADD_CATEGORY,
	ADD_CATEGORY_SUCCESS,
	ADD_CATEGORY_FAILURE,
] = createRequestActionTypes('settings/ADD_CATEGORY');
const [
	DELETE_CATEGORY,
	DELETE_CATEGORY_SUCCESS,
	DELETE_CATEGORY_FAILURE,
] = createRequestActionTypes('settings/DELETE_CATEGORY');

export const changeCategoryInput = createAction(
	CHANGE_CATEGORY_INPUT,
	({ key, value }) => ({
		key,
		value,
	}),
);
export const initializeCategoryInput = createAction(INITIALIZE_CATEGORY_INPUT);
export const readSettings = createAction(READ_SETTINGS, (id) => id);
export const addCategory = createAction(ADD_CATEGORY, ({ id, item }) => ({
	id,
	item,
}));
export const deleteCategory = createAction(
	DELETE_CATEGORY,
	({ id, categoryId }) => ({
		id,
		categoryId,
	}),
);

const readSettingsSaga = createRequestSaga(
	READ_SETTINGS,
	settingsAPI.readSettings,
);
const addCategorySaga = createRequestSaga(
	ADD_CATEGORY,
	settingsAPI.addCategory,
);
const deleteCategorySaga = createRequestSaga(
	DELETE_CATEGORY,
	settingsAPI.deleteCategory,
);

export function* settingsSaga() {
	yield takeLatest(READ_SETTINGS, readSettingsSaga);
	yield takeLatest(ADD_CATEGORY, addCategorySaga);
	yield takeLatest(DELETE_CATEGORY, deleteCategorySaga);
}

const initialState = {
	settings: null,
	settingsError: null,
	categoryInput: {
		color: '',
		subject: '',
	},
};

const settings = handleActions(
	{
		[CHANGE_CATEGORY_INPUT]: (state, { payload: { key, value } }) =>
			produce(state, (draft) => {
				draft['categoryInput'][key] = value;
			}),
		[INITIALIZE_CATEGORY_INPUT]: (state) => ({
			...state,
			categoryInput: initialState.categoryInput,
		}),
		[READ_SETTINGS_SUCCESS]: (state, { payload: settings }) => ({
			...state,
			settings,
		}),
		[READ_SETTINGS_FAILURE]: (state, { payload: error }) => ({
			...state,
			settingsError: error,
		}),
		[ADD_CATEGORY_SUCCESS]: (state, { payload: settings }) => ({
			...state,
			settings,
		}),
		[ADD_CATEGORY_FAILURE]: (state, { payload: error }) => ({
			...state,
			settingsError: error,
		}),
		[DELETE_CATEGORY_SUCCESS]: (state, { payload: settings }) => ({
			...state,
			settings,
		}),
		[DELETE_CATEGORY_FAILURE]: (state, { payload: error }) => ({
			...state,
			settingsError: error,
		}),
	},
	initialState,
);

export default settings;
