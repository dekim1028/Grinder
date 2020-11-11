import React from 'react';
import Main from '../../components/main/Main';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const {user} = useSelector(({user})=>({
        user:user.user,
    }));

    return (
        <Main user={user}/>
    );
};

export default MainContainer;