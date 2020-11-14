import { combineReducers } from "redux";
import { all } from 'redux-saga/effects'
import loading from './loading';
import auth,{ authSaga } from './auth';
import user,{ userSaga } from "./user";
import planner,{ plannerSaga } from "./planner";
import checklist,{ checklistSaga } from "./checklist";

const rootReducer = combineReducers({
    loading,
    auth,
    user,
    planner,
    checklist,
});

export function* rootSaga(){
    yield all([authSaga(),userSaga(),plannerSaga(),checklistSaga()]);
};

export default rootReducer;