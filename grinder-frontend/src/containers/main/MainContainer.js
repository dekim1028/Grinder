import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Main from '../../components/main/Main';
import { readSettings } from '../../modules/settings';

const MainContainer = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(({user})=>({
        user:user.user,
    }));

    useEffect(()=>{
        dispatch(readSettings(user.userid));
    },[dispatch,user]);

    return (
        <Main/>
    );
};

export default MainContainer;