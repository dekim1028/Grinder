import React from 'react';
import AboutGrinderPage from './AboutGrinderPage';
import { useSelector } from 'react-redux';
import MainPage from './MainPage';

const HomePage = () => {
    const {user,userError} = useSelector(({user})=>({
        user:user.user,
        userError:user.userError,
    }));

    if(!user || userError){
        return <AboutGrinderPage/>;
    }else{
        return <MainPage/>;
    }
};

export default HomePage;