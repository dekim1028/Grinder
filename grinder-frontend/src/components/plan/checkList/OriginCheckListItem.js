import React from 'react';
import styled from 'styled-components';

const OriginItemBlock = styled.div`
    display:flex;
    font-family: 'Rix오늘의만화',Comic Sans MS;
    margin-bottom:10px;

    .subject{
        width: 20%;
        height: 20px;
        font-weight: bold;
        text-align:center;
    }

    .category{
        border-bottom: 1px solid #b0e0e6;
        box-shadow: inset 0 -10px 0 #b0e0e6;
    }

    .content{
        width: 100%;
        padding-left:5px;
    }
`;

const OriginCheckListItem = ({item,onClick}) => {
    return (
        <OriginItemBlock>
            <div className="subject category">{item.subject}</div>
            <div className="content" onClick={()=>onClick(item)}>{item.content}</div>
            <input className="checkbox" type="checkbox" value={item.check}/>
        </OriginItemBlock>
    );
};

export default OriginCheckListItem;