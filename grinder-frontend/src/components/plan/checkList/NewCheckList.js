import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import NewCheckListItem from './NewCheckListItem';

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

const NewCheckList = ({settings,newCheckList, onAdd, onChange, onDelete, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            {
                newCheckList && 
                newCheckList.map((item)=>(
                    <NewCheckListItem key={`newCheckList_${item.id}`} subjectCategory={settings.SubjectCategory} item={item} onDelete={onDelete} onChange={onChange}/>
                ))
            }
            <AddCheckListBtn type="button" onClick={onAdd}>추가</AddCheckListBtn>
            {
                newCheckList.length>0 &&
                <SubmitCheckListBtn type="submit">완료</SubmitCheckListBtn>
            }
        </form>
    );
};

export default NewCheckList;