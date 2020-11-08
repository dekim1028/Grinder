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
    h2{
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

const AuthForm = ({children,type,form,onChange}) => {
    return (
        <AuthTemplateBlock>
            {children}
            {
                type==="SignUp" && (
                    <InputItem>
                        <h2>UserName</h2>
                        <InputBox type="text" name="username" onChange={onChange} value={form.username}/>
                    </InputItem>
                )
            }
            <InputItem>
                <h2>ID</h2>
                <InputBox type="text" name="userid" onChange={onChange} value={form.userid}/>
            </InputItem>
            <InputItem>
                <h2>Password</h2>
                <InputBox type="password" name="password" onChange={onChange} value={form.password}/>
            </InputItem>
            {
                type==="SignUp" && (
                    <InputItem>
                        <h2>Password Confirm</h2>
                        <InputBox type="password" name="passwordConfirm" onChange={onChange} value={form.passwordConfirm}/>
                    </InputItem>
                )
            }
            
            <AuthTemplateFooter>
                <MessageBox>
                </MessageBox>
                <StyledButton type="submit">
                    {type==="SignUp"?"Sign up":"Sign in"}
                </StyledButton>
                <StyledLink to={type==="SignUp"?"/signin":"/signup"}>
                    {type==="SignUp"?"Sign in":"Sign up"}
                </StyledLink>
            </AuthTemplateFooter>
        </AuthTemplateBlock>
    );
};

export default AuthForm;