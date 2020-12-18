import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import {takeLatest} from 'redux-saga/effects';
import produce from "immer";
import * as authAPI from '../lib/api/auth';

const CHANGE_FILED = "auth/CHANGE_FILED";
const INITIALIZE_FORM ="auth/INITIALIZE_FORM";
const [SIGN_UP,SIGN_UP_SUCCESS,SIGN_UP_FAILURE] = createRequestActionTypes('user/SIGN_UP');
const [SIGN_IN,SIGN_IN_SUCCESS,SIGN_IN_FAILURE] = createRequestActionTypes('user/SIGN_IN');

export const changeField = createAction(CHANGE_FILED,({form,key,value})=>({
    form,
    key,
    value
}));

export const initializeForm = createAction(INITIALIZE_FORM);

export const signUp = createAction(SIGN_UP,({userid,username,password})=>({
    userid,
    username,
    password
}));

export const signIn = createAction(SIGN_IN,({userid,password})=>({
    userid,
    password
}));

const signUpSaga = createRequestSaga(SIGN_UP,authAPI.signup);
const signInSaga = createRequestSaga(SIGN_IN,authAPI.signin);

export function* authSaga(){
    yield takeLatest(SIGN_UP,signUpSaga);
    yield takeLatest(SIGN_IN,signInSaga);
}

const initialState = {
    signup:{
        username:"",
        userid:"",
        password:"",
        passwordConfirm:"",
    },
    signin:{
        userid:"",
        password:""
    },
    auth:null,
    authError:null
};

const auth = handleActions({
    [CHANGE_FILED]:(state,{payload:{form,key,value}})=>
        produce(state,draft=>{
            draft[form][key]=value;
        }),
    [INITIALIZE_FORM]:()=>initialState,
    [SIGN_UP_SUCCESS]:(state,{payload:auth})=>({
        ...state,
        auth,
        authError:null,
    }),
    [SIGN_UP_FAILURE]:(state,{payload:error})=>({
        ...state,
        authError:error,
    }),
    [SIGN_IN_SUCCESS]:(state,{payload:auth})=>({
        ...state,
        auth,
        authError:null,
    }),
    [SIGN_IN_FAILURE]:(state,{payload:error})=>({
        ...state,
        authError:error,
    })
},initialState);

export default auth;
