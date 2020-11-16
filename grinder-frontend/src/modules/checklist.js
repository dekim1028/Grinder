import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import { handleActions, createAction } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import produce from "immer";
import * as checklistAPI from '../lib/api/checklist';

const [READ_CHECKLIST,READ_CHECKLIST_SUCCESS,READ_CHECKLIST_FAILURE] = createRequestActionTypes('checklist/READ_CHECKLIST');
const [UPDATE_CHECKLIST,UPDATE_CHECKLIST_SUCCESS,UPDATE_CHECKLIST_FAILURE] = createRequestActionTypes('checklist/UPDATE_CHECKLIST');
const SET_UPDATE_TARGET = 'checklist/SET_UPDATE_TARGET';
const CHANGE_UPDATE_TARGET = 'checklist/CHANGE_UPDATE_TARGET';
const [UPDATE_CHECKLIST_ITEM,UPDATE_CHECKLIST_ITEM_SUCCESS,UPDATE_CHECKLIST_ITEM_FAILURE] = createRequestActionTypes('checklist/UPDATE_CHECKLIST_ITEM');

export const readChecklist = createAction(READ_CHECKLIST,id=>id);
export const updateChecklist = createAction(UPDATE_CHECKLIST,checkList=>checkList);
export const setUpdateTarget = createAction(SET_UPDATE_TARGET,target=>target);
export const changeUpdateTarget = createAction(CHANGE_UPDATE_TARGET,({key,value})=>({
    key,
    value,
}));
export const updateChecklistItem = createAction(UPDATE_CHECKLIST_ITEM,({id,item})=>({
    id,
    item,
}));

const readChecklistSaga = createRequestSaga(READ_CHECKLIST,checklistAPI.read);
const updateChecklistSaga = createRequestSaga(UPDATE_CHECKLIST,checklistAPI.update);
const updateChecklistItemSaga = createRequestSaga(UPDATE_CHECKLIST_ITEM,checklistAPI.updateItem);

export function* checkListSaga(){
    yield takeLatest(READ_CHECKLIST,readChecklistSaga);
    yield takeLatest(UPDATE_CHECKLIST,updateChecklistSaga);
    yield takeLatest(UPDATE_CHECKLIST_ITEM,updateChecklistItemSaga);
}

const initialState = {
    checklist:null,
    checklistError:null,
    updateTarget:null,
};

const checkList = handleActions({
    [READ_CHECKLIST_SUCCESS]:(state,{payload:checklist})=>({
        ...state,
        checklist
    }),
    [READ_CHECKLIST_FAILURE]:(state,{payload:error})=>({
        ...state,
        checklistError:error
    }),
    [UPDATE_CHECKLIST_SUCCESS]:(state,{payload:checklist})=>({
        ...state,
        checklist
    }),
    [UPDATE_CHECKLIST_FAILURE]:(state,{payload:error})=>({
        ...state,
        checklistError:error
    }),
    [SET_UPDATE_TARGET]:(state,{payload:target})=>({
        ...state,
        updateTarget:target
    }),
    [CHANGE_UPDATE_TARGET]:(state,{payload:{key,value}})=>
        produce(state,draft=>{
            draft["updateTarget"][key]=value;
        }),
    [UPDATE_CHECKLIST_ITEM_SUCCESS]:(state,{payload:checklist})=>({
        ...state,
        checklist
    }),
    [UPDATE_CHECKLIST_ITEM_FAILURE]:(state,{payload:error})=>({
        ...state,
        checklistError:error
    })
},initialState);

export default checkList;