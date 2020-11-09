import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import AuthTemplate from '../../components/auth/AuthTemplate';
import AuthTemplateForHome from '../../components/auth/AuthTemplateForHome';
import { changeField,initializeForm, signUp } from '../../modules/auth';

const SignUpContainer = ({page}) => {
    const dispatch = useDispatch();
    const [error,setError] = useState('');

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

    const onSubmit = e =>{
        e.preventDefault();
        const {userid,username,password,passwordConfirm} = form;

        if([userid,username,password,passwordConfirm].includes('')){
            setError('빈칸을 모두 입력하세요');
            return;
        }

        if(password!==passwordConfirm){
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({form:"signup",key:"password",value:''}));
            dispatch(changeField({form:"signup",key:"passwordConfirm",value:''}));
            return;
        }

        dispatch(signUp({
            userid:form.userid,
            username:form.username,
            password:form.password,
        }));
    }

    useEffect(()=>{
        dispatch(initializeForm());
    },[dispatch]);

    if(page==="home"){
        return (
            <AuthTemplateForHome type="SignUp" form={form} onChange={onChange} onSubmit={onSubmit} error={error}/>
        );
    }else{
        return (
            <AuthTemplate type="SignUp" form={form} onChange={onChange} onSubmit={onSubmit} error={error}/>
        );
    }
};

export default SignUpContainer;