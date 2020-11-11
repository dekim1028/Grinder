import React from 'react';
import Header from '../../components/common/Header';
import { useDispatch } from 'react-redux';
import { logout } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const HeaderContainer = ({history}) => {
    const dispatch = useDispatch();

    const onLogout = () =>{
        dispatch(logout());
        history.push("/");
    };

    return (
        <Header onLogout={onLogout}/>
    );
};

export default withRouter(HeaderContainer);