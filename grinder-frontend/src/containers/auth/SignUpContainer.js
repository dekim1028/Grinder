import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import AuthTemplate from '../../components/auth/AuthTemplate';
import AuthTemplateForHome from '../../components/auth/AuthTemplateForHome';
import { changeField,initializeForm } from '../../modules/auth';

const SignUpContainer = ({page}) => {

    const dispatch = useDispatch();

    const {form} = useSelector(({auth})=>({
        form:auth.signup,
    }))

    const onChange = e =>{
        const {name,value} = e.target;
        dispatch(changeField({
            form:'signup',
            key:name,
            value
        }));
    };

    useEffect(()=>{
        dispatch(initializeForm());
    },[dispatch]);

    if(page==="home"){
        return (
            <AuthTemplateForHome type="SignUp" form={form} onChange={onChange}/>
        );
    }else{
        return (
            <AuthTemplate type="SignUp" form={form} onChange={onChange}/>
        );
    }
};

export default SignUpContainer;