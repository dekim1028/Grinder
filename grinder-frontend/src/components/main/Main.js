import React, { useState } from 'react';
import styled from 'styled-components';
import {FiBook,FiSettings} from 'react-icons/fi';
import cn from 'classnames';
import Profile from './Profile';
import Overview from './Overview';
import Settings from './Settings';

const MainBlock = styled.div`
    display:flex;
    justify-content:center;
    padding: 50px 0;
`;

const ContentBlock =styled.div``;

const MainHeader = styled.nav`
    svg{
            font-size: 18px;
            vertical-align:middle;
            margin-right:3px;
        }
`;

const NavItem = styled.a`
    width:150px;
    display: inline-block;
    padding: 10px;
    text-align: center;
    border-bottom:1px solid #D8D8D8;
    transition: border-bottom-color .36s ease-in;
    svg{
        color: #6E6E6E;
    }
    
    &:hover{
        border-bottom:2px solid #BDBDBD; 
    }
    
    &.click{
        border-bottom:2px solid #FF9D84;
        font-weight:600;
        svg{
            color: black;
        }
    }
`;

const Text = styled.span`
    font-size: 15px;
    vertical-align: bottom;
`;

const Main = ({user}) => {
    const [click,setClick] = useState(true);

    const onClick = () =>{
        setClick(!click);
    };

    return (
        <MainBlock>
            <Profile user={user}/>
            <ContentBlock>
                <MainHeader>
                    <NavItem href="#" className={cn({click})} onClick={onClick}><FiBook/><Text>Overview</Text></NavItem>
                    <NavItem href="#" className={cn({click:!click})} onClick={onClick}><FiSettings/><Text>Settings</Text></NavItem>
                </MainHeader>
                {
                    click?(
                        <Overview/>
                    ):(
                        <Settings/>
                    )
                }
            </ContentBlock>
        </MainBlock>
    );
};

export default Main;