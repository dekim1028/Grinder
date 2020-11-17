import React from 'react';
import styled from 'styled-components';
import {MdRemoveCircleOutline} from 'react-icons/md';

const NewItemBlock = styled.div`
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

const NewCheckListItem = ({subjectCategory, item, onDelete, onChange}) => {
    return (
        <NewItemBlock>
            <MdRemoveCircleOutline onClick={()=>onDelete(item.id)}/>
            <select id={item.id} name="subject" value={item.subjectCategoryId} onChange={onChange}>
                <option hidden defaultValue>과목</option>
                {
                    subjectCategory&&
                    subjectCategory.map(category=>(
                        <option key={category._id} value={category._id} data-color={category.color}>{category.subject}</option>
                    ))
                }
            </select>
            <input type="text" id={item.id} name="content" value={item.content} onChange={onChange}/>
        </NewItemBlock>
    );
};

export default NewCheckListItem;