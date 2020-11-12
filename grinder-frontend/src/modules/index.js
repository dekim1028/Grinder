import { combineReducers } from "redux";
import { all } from 'redux-saga/effects'
import loading from './loading';
import auth,{ authSaga } from './auth';
import user,{ userSaga } from "./user";
import planner,{ plannerSaga } from "./planner";

const rootReducer = combineReducers({
    loading,
    auth,
    user,
    planner,
});

export function* rootSaga(){
    yield all([authSaga(),userSaga(),plannerSaga()]);
};

export default rootReducer;