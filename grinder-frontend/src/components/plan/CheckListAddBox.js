import React from 'react';
import styled from 'styled-components';
import {MdRemoveCircleOutline} from 'react-icons/md';

const AddBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    select{
        border: none;
        color: #135461;
        font-weight: 600;
        outline: none;
    }

    input{
        width:190px;
        outline: none;
        border: none;
        border-bottom: 1px solid #135461;
        margin-left:5px;
        padding: 0 5px 3px;
        font-size: 14px;
    }

    svg{
        font-size: 20px;
        color:#B40404;
    }

    svg:hover{
        color:#ff0000;
    }
`;

const CheckListAddBox = ({item, onDelete, onChange}) => {
    return (
        <AddBox>
            <MdRemoveCircleOutline onClick={()=>onDelete(item.id)}/>
            <select id={item.id} name="subject" onChange={onChange}>
                <option value="수학">수학</option>
                <option value="국어">국어</option>
                <option value="영어">영어</option>
                <option value="과학">과학</option>
                <option value="한국사">한국사</option>
            </select>
            <input type="text" id={item.id} name="content" onChange={onChange}/>
        </AddBox>
    );
};

export default CheckListAddBox;