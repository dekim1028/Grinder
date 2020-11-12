import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const CheckListBlock =styled.div`
    font-size: 15px;
    margin-top:15px;
`;


const Item = styled.div`
    display:flex;
    font-family: 'Rix오늘의만화',Comic Sans MS;
    margin-bottom:10px;

    .subject{
        width: 15%;
        font-weight: bold;
        text-align:center;
    }

    .category{
        border-bottom: 1px solid #b0e0e6;
        box-shadow: inset 0 -10px 0 #b0e0e6;
    }

    .content{
        width: 100%;
        padding: 0 5px;
    }
`;

const AddCheckListBtn = styled(Button)`
    width:100%;
    font-size: 13px;
    margin-top:20px;
    background-color:white;
    border:1px dashed #D8D8D8;
    color:#D8D8D8;
    &:hover{
        background-color:white;
        border-color:#BDBDBD;
        color:#BDBDBD
    }
`;

const CheckList = ({checkList}) => {
    return (
        <CheckListBlock>
            {
                checkList &&
                checkList.map((item,index)=>(
                    <Item key={`checkListItem_${index}`}>
                        <div className="subject category">{item.subject}</div>
                        <div className="content">{item.content}</div>
                        <input className="checkbox" type="checkbox" value={item.check}/>
                    </Item>
                ))
            }
           
            <AddCheckListBtn>추가</AddCheckListBtn>
        </CheckListBlock>
    );
};

export default CheckList;