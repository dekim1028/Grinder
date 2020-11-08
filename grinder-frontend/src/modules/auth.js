import {createAction, handleActions} from 'redux-actions';
import produce from "immer";

const CHANGE_FILED = "auth/CHANGE_FILED";
const INITIALIZE_FORM ="auth/INITIALIZE_FORM";

export const changeField = createAction(CHANGE_FILED,({form,key,value})=>({
    form,
    key,
    value
}));

export const initializeForm = createAction(INITIALIZE_FORM);

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
    }
};

const auth = handleActions({
    [CHANGE_FILED]:(state,{payload:{form,key,value}})=>
        produce(state,draft=>{
            draft[form][key]=value;
        }),
    [INITIALIZE_FORM]:()=>initialState,
},initialState);

export default auth;
