import React from 'react';
import AuthForm from './AuthForm';

const AuthTemplateForHome = ({type}) => {
    return (
        <AuthForm type={type}/>
    );
};

export default AuthTemplateForHome;