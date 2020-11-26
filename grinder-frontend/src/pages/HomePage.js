import React from 'react';
import AboutGrinderPage from './AboutGrinderPage';
import { useSelector } from 'react-redux';
import MainPage from './MainPage';

const HomePage = () => {
    const {user} = useSelector(({user})=>({
        user:user.user,
    }));

    if(user && localStorage.getItem("user")){
        return <MainPage/>;
    }else{
        return <AboutGrinderPage/>;
    }
};

export default HomePage;