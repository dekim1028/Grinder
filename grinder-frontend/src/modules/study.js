import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import produce from "immer";

const INITIALIZE_FORM = 'study/INITIALIZE_FORM';
const SET_STUDY_TARGET = 'study/SET_STUDY_TARGET';
const SET_STUDYING_INFO = 'study/SET_STUDYING_INFO';

export const setStudyTarget = createAction(SET_STUDY_TARGET,studyTarget=>studyTarget);
export const setStudyingInfo = createAction(SET_STUDYING_INFO,({key,value})=>({
    key,
    value,
}));
export const initializeForm = createAction(INITIALIZE_FORM);

const initialState = {
    studyTarget:null,
    studyingInfo:{
        id:null,
        startTime:null,
        endTime:null,
    }
};

const study = handleActions({
    [SET_STUDY_TARGET]:(state,{payload:studyTarget})=>({
        ...state,
        studyTarget:studyTarget
    }),
    [SET_STUDYING_INFO]:(state,{payload:{key,value}})=>
        produce(state,draft=>{
            draft['studyingInfo'][key]=value;
        }),
    [INITIALIZE_FORM]:(state)=>({
        ...state,
        studyingInfo:initialState.studyingInfo
    }),

},initialState);

export default study;


