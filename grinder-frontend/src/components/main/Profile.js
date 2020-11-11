import React from 'react';
import styled from 'styled-components';
import profile from '../../style/img/profile.jpg';

const ProfileBlock = styled.div`
    width: 250px;
    margin-right: 50px;
    .profileImg{
        width:200px;
        height:200px;
        margin-bottom: 20px;
        box-shadow: 1px 2px 5px #BDBDBD;
        border-radius: 50%;
        text-align: center;
        overflow:hidden;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .profile{
        h1{
            font-size:30px;
            margin:0;
        }

        h2{
            font-size:20px;
            font-weight: normal;
            color: gray;
            margin:0;
        }
    }
`;

const Profile = ({user}) => {
    return (
        <ProfileBlock>
            <div className="profileImg">
                <img src={profile} alt="프로필"/>
            </div>
            <div className="profile">
                <h1>{user.username}</h1>
                <h2>{user.userid}</h2>
            </div>
        </ProfileBlock>
    );
};

export default Profile;