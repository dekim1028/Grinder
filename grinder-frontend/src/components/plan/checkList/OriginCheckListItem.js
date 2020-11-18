import React from 'react';
import styled, { css } from 'styled-components';

const itemStatusStyle = css`
    width: 67px;
    text-align:center;
    border-radius: 4px;
    padding: 3px;
    font-size: 12px;
    color: white;
`;

const OriginItemBlock = styled.div`
    display:flex;
    font-family: 'Rix오늘의만화',Comic Sans MS;
    margin-bottom:10px;

    .subject{
        width: 65px;
        height: 20px;
        font-weight: bold;
        text-align:center;
    }

    .category{
        border-bottom: 1px solid;
        box-shadow: inset 0 -10px 0;
    }

    .content{
        width: 100%;
        padding-left:5px;
        cursor: pointer;
    }

    .content:hover{
        color:#135461;
        font-weight:bold;
    }

    .complete{
        ${itemStatusStyle}
        background-color: #A4A4A4;
    }

    .continue{
        ${itemStatusStyle}
        background-color: #31B404;
    }

    .noComplete{
        ${itemStatusStyle}
        background-color: #B40404;
    }
`;

const OriginCheckListItem = ({item,onClick}) => {
    return (
        <OriginItemBlock>
            <div className="subject category" style={{borderBottomColor:item.color,boxShadow:`inset 0 -10px 0 ${item.color}`}}>{item.subject}</div>
            <div className="content" onClick={onClick}>{item.content}</div>
            {
                item.startTime!=="" && item.endTime!==""?(
                    <div className="complete">완료</div>
                ):item.startTime!=="" && item.endTime===""?(
                    <div className="continue">진행중</div>
                ):(
                    <div className="noComplete">미완료</div>
                )
            }
            
        </OriginItemBlock>
    );
};

export default OriginCheckListItem;