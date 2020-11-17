import React from 'react';
import { useSelector } from 'react-redux';
import Main from '../../components/main/Main';

const MainContainer = () => {
    const {user} = useSelector(({user})=>({
        user:user.user,
    }));

    return (
        <Main user={user}/>
    );
};

export default MainContainer;