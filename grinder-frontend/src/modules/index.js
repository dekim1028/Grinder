import { combineReducers } from "redux";
import { all } from 'redux-saga/effects'
import loading from './loading';
import auth,{ authSaga } from './auth';
import user,{ userSaga } from "./user";
import planner,{ plannerSaga } from "./planner";
import checkList,{ checkListSaga } from "./checkList";
import settings, { settingsSaga } from "./settings";
import overview, { overviewSaga } from "./overview";

const rootReducer = combineReducers({
    loading,
    auth,
    user,
    planner,
    checkList,
    settings,
    overview,
});

export function* rootSaga(){
    yield all([
        authSaga(),
        userSaga(),
        plannerSaga(),
        checkListSaga(),
        settingsSaga(),
        overviewSaga()
    ]);
};

export default rootReducer;