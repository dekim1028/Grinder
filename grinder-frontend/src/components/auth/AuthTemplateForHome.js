import React from 'react';
import AuthForm from './AuthForm';

const AuthTemplateForHome = ({type,form,onChange,onSubmit,error}) => {
    return (
        <AuthForm type={type} form={form} onChange={onChange} onSubmit={onSubmit} error={error}/>
    );
};

export default AuthTemplateForHome;