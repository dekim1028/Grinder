import React from 'react';
import AuthForm from './AuthForm';

const AuthTemplateForHome = ({type,onChange,form}) => {
    return (
        <AuthForm type={type} form={form} onChange={onChange}/>
    );
};

export default AuthTemplateForHome;