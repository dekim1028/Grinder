import createRequestSaga, {
	createRequestActionTypes,
} from '../lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as plannerAPI from '../lib/api/planner';

const INITIALIZE_FORM = 'planner/INITIALIZE_FORM';
const CHANGE_FILED = 'planner/CHANGE_FILED';
const [
	READ_PLANNER,
	READ_PLANNER_SUCCESS,
	READ_PLANNER_FAILURE,
] = createRequestActionTypes('planner/READ_PLANNER');
const [
	UPDATE_PLANNER,
	UPDATE_PLANNER_SUCCESS,
	UPDATE_PLANNER_FAILURE,
] = createRequestActionTypes('planner/UPDATE_PLANNER');

export const initializeForm = createAction(INITIALIZE_FORM);

export const changeField = createAction(CHANGE_FILED, ({ key, value }) => ({
	key,
	value,
}));

export const readPlanner = createAction(READ_PLANNER, (date) => date);

export const updatePlanner = createAction(UPDATE_PLANNER, (planner) => planner);

const readPlannerSaga = createRequestSaga(READ_PLANNER, plannerAPI.read);
const updatePlannerSaga = createRequestSaga(UPDATE_PLANNER, plannerAPI.update);

export function* plannerSaga() {
	yield takeLatest(READ_PLANNER, readPlannerSaga);
	yield takeLatest(UPDATE_PLANNER, updatePlannerSaga);
}

const initialState = {
	planner: null,
	plannerError: null,
};

const planner = handleActions(
	{
		[INITIALIZE_FORM]: () => initialState,
		[CHANGE_FILED]: (state, { payload: { key, value } }) =>
			produce(state, (draft) => {
				draft['planner'][key] = value;
			}),
		[READ_PLANNER_SUCCESS]: (state, { payload: planner }) => ({
			...state,
			planner,
		}),
		[READ_PLANNER_FAILURE]: (state, { payload: error }) => ({
			...state,
			plannerError: error,
		}),
		[UPDATE_PLANNER_SUCCESS]: (state, { payload: planner }) => ({
			...state,
			planner,
		}),
		[UPDATE_PLANNER_FAILURE]: (state, { payload: error }) => ({
			...state,
			plannerError: error,
		}),
	},
	initialState,
);

export default planner;
