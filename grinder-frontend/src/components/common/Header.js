import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
    position:fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #66ccb6;
    padding: 0 1.5rem;
    z-index:999;
`;

const LogoBlock = styled(Link)`
    color:white;
    font-size:25px;
    font-weight:bold;
`;

const MenuBlock = styled.div`
    width:100%;
    color:white;
    font-weight:bold;
    margin: 0 30px;
    font-size: 15px;
    display:flex;
    align-items:center;
`;

const Menu = styled(Link)`
    margin: 0 20px;
    &:hover{
        color:#8CE0C6;
    }
`;

const StyledButton = styled(Button)`
    background:none;
    border:1px solid white;
    color:white;
`;

const Space = styled.div`
    height:50px;
`;

const Header = ({onLogout}) => {
    return (
        <>
            <HeaderBlock>
                <LogoBlock to="/">GRINDER</LogoBlock>
                <MenuBlock>
                    <Menu to="/study">Start Studying</Menu>
                    <Menu to="/plan">Planner</Menu>
                </MenuBlock>
                <StyledButton onClick={onLogout}>Logout</StyledButton>
            </HeaderBlock>
            <Space/>
        </>
    );
};

export default Header;