import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthTemplate from '../../components/auth/AuthTemplate';
import { changeField, initializeForm, signIn } from '../../modules/auth';
import { check } from '../../modules/user';

const SignInContainer = ({history}) => {
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const {form,auth,authError,user} = useSelector(({auth,user})=>({
        form:auth.signin,
        auth:auth.auth,
        authError:auth.authError,
        user:user.user
    }));

    const onChange = e =>{
        const {name,value} = e.target;
        dispatch(changeField({
            form:'signin',
            key:name,
            value
        }));
    };

    const onSubmit = e =>{
        e.preventDefault();
        const {userid,password} = form;

        if([userid,password].includes('')){
            setError('빈칸을 모두 입력하세요');
            return;
        }
        dispatch(signIn({userid,password}));
    };

    useEffect(()=>{
        return(()=>{
            dispatch(initializeForm());
        });
    },[dispatch]);

    useEffect(()=>{
        if(authError){
            setError('가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.');
            return;
        }
        if(auth){
            dispatch(check());
        }
    },[dispatch,auth,authError])

    useEffect(()=>{
        if(user){
            console.log("Sign in success");
            try{
                localStorage.setItem("user",JSON.stringify(user));
            }catch(e){
                console.log("localStorage is not working");
            }
            history.push("/");
        }
    },[user,history])

    return (
        <AuthTemplate type="SignIn" form={form} onChange={onChange} onSubmit={onSubmit} error={error}/>
    );
};

export default withRouter(SignInContainer);