import createRequestSaga, {
	createRequestActionTypes,
} from '../lib/createRequestSaga';
import { handleActions, createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as overviewAPI from '../lib/api/overview';

const [
	READ_OVERVIEW_PLAN,
	READ_OVERVIEW_PLAN_SUCCESS,
	READ_OVERVIEW_PLAN_FAILURE,
] = createRequestActionTypes('overview/READ_OVERVIEW_PLAN');
const [
	READ_OVERVIEW_CHART,
	READ_OVERVIEW_CHART_SUCCESS,
	READ_OVERVIEW_CHART_FAILURE,
] = createRequestActionTypes('overview/READ_OVERVIEW_CHART');

export const readOverviewPlan = createAction(READ_OVERVIEW_PLAN);
export const readOverviewChart = createAction(READ_OVERVIEW_CHART);

const readOverviewPlanSaga = createRequestSaga(
	READ_OVERVIEW_PLAN,
	overviewAPI.readOverviewPlan,
);
const readOverviewChartSaga = createRequestSaga(
	READ_OVERVIEW_CHART,
	overviewAPI.readOverviewChart,
);

export function* overviewSaga() {
	yield takeLatest(READ_OVERVIEW_PLAN, readOverviewPlanSaga);
	yield takeLatest(READ_OVERVIEW_CHART, readOverviewChartSaga);
}

const initialState = {
	list: null,
	chart: null,
	overviewError: null,
};

const overview = handleActions(
	{
		[READ_OVERVIEW_PLAN_SUCCESS]: (state, { payload: list }) => ({
			...state,
			list,
		}),
		[READ_OVERVIEW_PLAN_FAILURE]: (state, { payload: error }) => ({
			...state,
			overviewError: error,
		}),
		[READ_OVERVIEW_CHART_SUCCESS]: (state, { payload: chart }) => ({
			...state,
			chart,
		}),
		[READ_OVERVIEW_CHART_FAILURE]: (state, { payload: error }) => ({
			...state,
			overviewError: error,
		}),
	},
	initialState,
);

export default overview;
