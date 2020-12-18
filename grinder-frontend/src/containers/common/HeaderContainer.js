import React, { useEffect } from 'react';
import Header from '../../components/common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const HeaderContainer = ({history}) => {
    const dispatch = useDispatch();
    const {user} = useSelector(({user})=>({
        user:user.user,
    }));

    const onLogout = () =>{
        dispatch(logout());
    };

    useEffect(()=>{
        if(!user){
            history.push("/");
        }
    },[history,user]);

    return (
        <Header onLogout={onLogout}/>
    );
};

export default withRouter(HeaderContainer);