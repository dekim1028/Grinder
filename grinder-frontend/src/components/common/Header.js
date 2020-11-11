import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const HeaderBlock = styled.div`
    position:fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:linear-gradient(to bottom,#66ccb6,#339290);
    padding: 0 1.5rem;
    z-index:999;
`;

const LogoBlock = styled.div`
    color:white;
    font-size:25px;
    font-weight:bold;
`;

const MenuBlock = styled.div`
    color:white;
    font-size:20px;
    font-weight:bold;
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
                <LogoBlock>GRINDER</LogoBlock>
                <MenuBlock>
                    <StyledButton onClick={onLogout}>Logout</StyledButton>
                </MenuBlock>
            </HeaderBlock>
            <Space/>
        </>
    );
};

export default Header;