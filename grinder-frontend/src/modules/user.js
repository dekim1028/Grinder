import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import {takeLatest, call} from 'redux-saga/effects';
import * as userAPI from '../lib/api/user';

const [CHECK,CHECK_SUCCESS,CHECK_FAILURE] = createRequestActionTypes('user/CHECK');
const TEMP_SET_USER = 'user/TEMP_SET_USER';
const LOGOUT = 'user/LOGOUT';

export const check = createAction(CHECK);
export const tempSetUser = createAction(TEMP_SET_USER,user=>user);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK,userAPI.check);
function checkFailureSaga(){
    try{
        localStorage.removeItem("user");
    }catch(e){
        console.log(e);
    }
}

function* logoutSaga(){
    try{
        yield call(userAPI.logout);
        localStorage.removeItem("user");
    }catch(e){
        console.log(e);
    }
}

export function* userSaga(){
    yield takeLatest(CHECK,checkSaga);
    yield takeLatest(CHECK_FAILURE,checkFailureSaga);
    yield takeLatest(LOGOUT,logoutSaga);
};

const initialState = {
    user:null,
    userError:null,
};

const user = handleActions({
    [CHECK_SUCCESS]:(state,{payload:user})=>({
        ...state,
        user,
    }),
    [CHECK_FAILURE]:(state,{payload:error})=>({
        ...state,
        userError:error,
    }),
    [TEMP_SET_USER]:(state,{payload:user})=>({
        ...state,
        user,
    }),
    [LOGOUT]:state=>({
        ...state,
        user:null,
    })
},initialState);

export default user;