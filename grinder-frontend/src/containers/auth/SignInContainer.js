import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import AuthTemplate from '../../components/auth/AuthTemplate';
import { changeField, initializeForm } from '../../modules/auth';

const SignInContainer = () => {
    const dispatch = useDispatch();

    const {form} = useSelector(({auth})=>({
        form:auth.signin,
    }))

    const onChange = e =>{
        const {name,value} = e.target;
        dispatch(changeField({
            form:'signin',
            key:name,
            value
        }));
    };

    useEffect(()=>{
        dispatch(initializeForm());
    },[dispatch]);

    return (
        <AuthTemplate type="SignIn" form={form} onChange={onChange}/>
    );
};

export default SignInContainer;