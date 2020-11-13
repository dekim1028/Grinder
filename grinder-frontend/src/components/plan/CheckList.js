import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import CheckListAddBox from './CheckListAddBox';

const CheckListBlock =styled.div`
    font-size: 15px;
    margin-top:15px;
`;


const Item = styled.div`
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

const SubmitCheckListBtn = styled(Button)`
    width:100%;
    font-size: 13px;
    margin-top:10px;
`;

const CheckList = ({checkList,newCheckList, onAdd, onDelete, onChange, onSubmit}) => {
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
            <form onSubmit={onSubmit}>
            {
                newCheckList && 
                newCheckList.map((item)=>(
                    <CheckListAddBox key={`newCheckList_${item.id}`} item={item} onDelete={onDelete} onChange={onChange}/>
                ))
            }
            <AddCheckListBtn type="button" onClick={onAdd}>추가</AddCheckListBtn>
            {
                newCheckList.length>0 &&
                <SubmitCheckListBtn type="submit">완료</SubmitCheckListBtn>
            }
            </form>
        </CheckListBlock>
    );
};

export default CheckList;