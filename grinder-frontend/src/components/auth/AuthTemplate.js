import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import {Link} from 'react-router-dom';

const AuthTemplateBlock = styled.form`
    border-radius: 15px;
    background-color:white;
    color:black;
    padding: 20px;
    box-shadow: 1px 1px 2px grey;
`;

const InputItem = styled.div`
    margin-bottom:15px;
    h1{
        color:#A4A4A4;
        font-size:15px;
        font-weight: 500;
        margin: 5px 0;
    }
`;

const InputBox = styled.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 1px solid #BDBDBD;
    border-radius: 5px;
    padding: 5px;
`;

const AuthTemplateFooter = styled.div`
    text-align: center;
`;

const MessageBox = styled.div`
    font-size: 14px;
`;

const StyledButton = styled(Button)`
    width:100%;
    margin: 15px 0 5px;
`;

const StyledLink = styled(Link)`
    color:#A4A4A4;
    font-size:13px;
    &:hover{
        color:#BDBDBD;
    }
`;

const AuthTemplate = () => {
    return (
        <AuthTemplateBlock>
            <InputItem>
                <h1>UserName</h1>
                <InputBox type="text"/>
            </InputItem>
            <InputItem>
                <h1>ID</h1>
                <InputBox type="text"/>
            </InputItem>
            <InputItem>
                <h1>Password</h1>
                <InputBox type="password"/>
            </InputItem>
            <InputItem>
                <h1>Password Confirm</h1>
                <InputBox type="password"/>
            </InputItem>
            <AuthTemplateFooter>
                <MessageBox>
                </MessageBox>
                <StyledButton type="submit">Sign up</StyledButton>
                <StyledLink>Sign in</StyledLink>
            </AuthTemplateFooter>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;