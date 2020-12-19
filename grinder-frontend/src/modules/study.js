import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
	createRequestActionTypes,
} from '../lib/createRequestSaga';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import * as studyAPI from '../lib/api/study';

const INITIALIZE_FORM = 'study/INITIALIZE_FORM';
const SET_STUDY_TARGET = 'study/SET_STUDY_TARGET';
const SET_STUDYING_INFO = 'study/SET_STUDYING_INFO';
const [
	UPDATE_STUDYTIME,
	UPDATE_STUDYTIME_SUCCESS,
	UPDATE_STUDYTIME_FAILURE,
] = createRequestActionTypes('study/UPDATE_STUDYTIME');

export const setStudyTarget = createAction(
	SET_STUDY_TARGET,
	(studyTarget) => studyTarget,
);
export const setStudyingInfo = createAction(
	SET_STUDYING_INFO,
	({ key, value }) => ({
		key,
		value,
	}),
);
export const initializeForm = createAction(INITIALIZE_FORM);
export const updateStudyTime = createAction(
	UPDATE_STUDYTIME,
	(studyingInfo) => studyingInfo,
);

const updateStudyTimeSaga = createRequestSaga(
	UPDATE_STUDYTIME,
	studyAPI.updateStudyTime,
);

export function* studySaga() {
	yield takeLatest(UPDATE_STUDYTIME, updateStudyTimeSaga);
}

const initialState = {
	studyTarget: null,
	studyingInfo: {
		id: null,
		startTime: null,
		endTime: null,
	},
	studyError: null,
};

const study = handleActions(
	{
		[SET_STUDY_TARGET]: (state, { payload: studyTarget }) => ({
			...state,
			studyTarget: studyTarget,
		}),
		[SET_STUDYING_INFO]: (state, { payload: { key, value } }) =>
			produce(state, (draft) => {
				draft['studyingInfo'][key] = value;
			}),
		[INITIALIZE_FORM]: () => initialState,
		[UPDATE_STUDYTIME_SUCCESS]: () => initialState,
		[UPDATE_STUDYTIME_FAILURE]: (state, { payload: error }) => ({
			...state,
			studyError: error,
		}),
	},
	initialState,
);

export default study;
