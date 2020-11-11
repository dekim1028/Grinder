import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import MainContainer from '../containers/main/MainContainer';


const MainPage = () => {
    return (
        <>
            <HeaderContainer/>
            <Responsive>
                <MainContainer/>
            </Responsive>
        </>
    );
};

export default MainPage;