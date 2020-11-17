import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readSettings } from '../../modules/settings';
import Main from '../../components/main/Main';

const MainContainer = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(({user})=>({
        user:user.user,
    }));

    useEffect(()=>{
        dispatch(readSettings(user.userid));
    },[dispatch,user.userid]);

    return (
        <Main user={user}/>
    );
};

export default MainContainer;