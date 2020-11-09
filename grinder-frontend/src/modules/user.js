import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import * as userAPI from '../lib/api/user';

const [CHECK,CHECK_SUCCESS,CHECK_FAILURE] = createRequestActionTypes('user/CHECK');
const TEMP_SET_USER = 'user/TEMP_SET_USER';

export const check = createAction(CHECK);
export const tempSetUser = createAction(TEMP_SET_USER,user=>user);

const checkSaga = createRequestSaga(CHECK,userAPI.check);

export function* userSaga(){
    yield takeLatest(CHECK,checkSaga);
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
    })
},initialState);

export default user;