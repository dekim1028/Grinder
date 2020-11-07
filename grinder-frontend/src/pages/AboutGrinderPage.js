import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import SignUpContainer from '../containers/auth/SignUpContainer';

const HomeBlock = styled.div`
    height: 100vh;
    background:linear-gradient(to bottom,#66ccb6,white);
    padding:1rem 2rem;

    @media (max-width:768px){
        height: auto;
    }
`;

const HomeHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    .logo{
        color:white;
        font-size:25px;
        font-weight:bold;
    }

    @media (max-width:768px){
        justify-content:center;
    }
`;

const StyledButton = styled(Button)`
    background:none;
    border:1px solid white;
    color:white;

    @media (max-width:768px){
        display:none;
    }
`;

const HomeContent = styled.div`
    height:80%;
`;

const Content = styled.div`
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;

    @media (max-width:768px){
        display:block;
    }
`;

const ContentItem = styled.div`
    width:400px;
    &.explain{
        h1,h2,h3{
            color:white;
        }

        h1{
            font-size: 60px;
            line-height: 1;
        }
    }

    @media (max-width:768px){
        width: 80vw;
        margin: 0 auto;
        &.explain{
            width: auto;
            text-align: center;
            margin-bottom: 50px;
        }
    }
`;

const AboutGrinderPage = () => {
    return (
        <HomeBlock>
            <HomeHeader>
                <div className="logo">About GRINDER</div>
                <StyledButton>Sign in</StyledButton>
            </HomeHeader>
            <HomeContent>
                <Content>
                    <ContentItem className="explain">
                        <h1>Planner for<br/>grinders</h1>
                        <h2>Grinder란?</h2>
                        <h3>공부를 열심히 하는 사람 혹은<br/>공부벌레 라는 의미를 지니고 있다.</h3>
                    </ContentItem>
                    <ContentItem>
                        <SignUpContainer/>
                    </ContentItem>
                </Content>
            </HomeContent>
        </HomeBlock>
    );
};

export default AboutGrinderPage;