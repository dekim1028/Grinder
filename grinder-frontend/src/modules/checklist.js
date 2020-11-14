import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import { handleActions, createAction } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import * as checklistAPI from '../lib/api/checklist';

const [READ_CHECKLIST,READ_CHECKLIST_SUCCESS,READ_CHECKLIST_FAILURE] = createRequestActionTypes('checklist/READ_CHECKLIST');
const [UPDATE_CHECKLIST,UPDATE_CHECKLIST_SUCCESS,UPDATE_CHECKLIST_FAILURE] = createRequestActionTypes('checklist/UPDATE_CHECKLIST');

export const readChecklist = createAction(READ_CHECKLIST,id=>id);
export const updateChecklist = createAction(UPDATE_CHECKLIST,checkList=>checkList);

const readChecklistSaga = createRequestSaga(READ_CHECKLIST,checklistAPI.read);
const updateChecklistSaga = createRequestSaga(UPDATE_CHECKLIST,checklistAPI.update);

export function* checklistSaga(){
    yield takeLatest(READ_CHECKLIST,readChecklistSaga);
    yield takeLatest(UPDATE_CHECKLIST,updateChecklistSaga);
}

const initialState = {
    checklist:null,
    checklistError:null
};

const checklist = handleActions({
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
},initialState);

export default checklist;