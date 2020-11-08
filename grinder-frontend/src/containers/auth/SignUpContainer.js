import React from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import AuthTemplateForHome from '../../components/auth/AuthTemplateForHome';

const SignUpContainer = ({page}) => {
    if(page==="home"){
        return (
            <AuthTemplateForHome type="SignUp"/>
        );
    }else{
        return (
            <AuthTemplate type="SignUp"/>
        );
    }
};

export default SignUpContainer;