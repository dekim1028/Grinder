import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import { handleActions, createAction } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import produce from "immer";
import * as checklistAPI from '../lib/api/checklist';

const [READ_CHECKLIST,READ_CHECKLIST_SUCCESS,READ_CHECKLIST_FAILURE] = createRequestActionTypes('checklist/READ_CHECKLIST');

const SET_UPDATE_TARGET = 'checklist/SET_UPDATE_TARGET';
const CHANGE_UPDATE_TARGET = 'checklist/CHANGE_UPDATE_TARGET';
const [ADD_CHECKLIST_ITEM,ADD_CHECKLIST_ITEM_SUCCESS,ADD_CHECKLIST_ITEM_FAILURE] = createRequestActionTypes('checklist/ADD_CHECKLIST_ITEM');
const [UPDATE_CHECKLIST_ITEM,UPDATE_CHECKLIST_ITEM_SUCCESS,UPDATE_CHECKLIST_ITEM_FAILURE] = createRequestActionTypes('checklist/UPDATE_CHECKLIST_ITEM');
const [DELETE_CHECKLIST_ITEM,DELETE_CHECKLIST_ITEM_SUCCESS,DELETE_CHECKLIST_ITEM_FAILURE] = createRequestActionTypes('checklist/DELETE_CHECKLIST_ITEM');

export const readChecklist = createAction(READ_CHECKLIST,id=>id);
export const setUpdateTarget = createAction(SET_UPDATE_TARGET,target=>target);
export const changeUpdateTarget = createAction(CHANGE_UPDATE_TARGET,({key,value})=>({
    key,
    value,
}));
export const addChecklistItem = createAction(ADD_CHECKLIST_ITEM,({id,newCheckList})=>({
    id,
    newCheckList,
}));
export const updateChecklistItem = createAction(UPDATE_CHECKLIST_ITEM,({id,item})=>({
    id,
    item,
}));
export const deleteChecklistItem = createAction(DELETE_CHECKLIST_ITEM,({id,itemId})=>({
    id,
    itemId,
}));

const readChecklistSaga = createRequestSaga(READ_CHECKLIST,checklistAPI.read);
const addChecklistItemSaga = createRequestSaga(ADD_CHECKLIST_ITEM,checklistAPI.addChecklistItem);
const updateChecklistItemSaga = createRequestSaga(UPDATE_CHECKLIST_ITEM,checklistAPI.updateChecklistItem);
const deleteChecklistItemSaga = createRequestSaga(DELETE_CHECKLIST_ITEM,checklistAPI.deleteChecklistItem);

export function* checkListSaga(){
    yield takeLatest(READ_CHECKLIST,readChecklistSaga);
    yield takeLatest(ADD_CHECKLIST_ITEM,addChecklistItemSaga);
    yield takeLatest(UPDATE_CHECKLIST_ITEM,updateChecklistItemSaga);
    yield takeLatest(DELETE_CHECKLIST_ITEM,deleteChecklistItemSaga);
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
    [ADD_CHECKLIST_ITEM_SUCCESS]:(state,{payload:checklist})=>({
        ...state,
        checklist
    }),
    [ADD_CHECKLIST_ITEM_FAILURE]:(state,{payload:error})=>({
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
    }),
    [DELETE_CHECKLIST_ITEM_SUCCESS]:(state,{payload:checklist})=>({
        ...state,
        checklist
    }),
    [DELETE_CHECKLIST_ITEM_FAILURE]:(state,{payload:error})=>({
        ...state,
        checklistError:error
    })
},initialState);

export default checkList;
