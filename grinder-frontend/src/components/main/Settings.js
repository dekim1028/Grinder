import React from 'react';
import styled from 'styled-components';
import {BiPin} from 'react-icons/bi';
import {MdColorLens,MdClose} from 'react-icons/md';
import CustomSketchPicker from '../common/CustomSketchPicker';

const SettingsBlock = styled.div`
    width:700px;
`;

const ContentBlock = styled.div`
    margin-top:30px;
`;

const Title =styled.h1`
    font-weight: 500;
    font-size: 16px;
    svg{
        font-size:20px;
    }
    span{
        vertical-align: top;
    }
`;

const SubjectCategoryBlock = styled.div`

`;

const SubjectCategoryItem = styled.div`
    width: fit-content;
    display:inline-block;
    border: 1px solid #E6E6E6;
    border-radius: 15px;
    margin: 10px 5px;
    padding: 5px 10px;  
    font-size: 14px;

    .subject{
        margin-right:10px;
    }

    .color{
        width:11px;
        height:11px;
        background:orange;
        border-radius:50%;
        margin-right:5px;
    }
`;

const ItemWrap = styled.div`
    display:flex;
    align-items:center;
`;

const InputBlock = styled.form`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom:10px;
    border: 1px solid #e1e4e8;
    border-radius: 4px;

    .addBtn{
        width: 35px;
        height: 32px;
        background-color:#fafbfc;
        color:#e1e4e8;
        font-size: 25px;
        border:none;
        border-left: 1px solid #e1e4e8;
        outline: none;
    }

    .addBtn:hover{
        background-color:#F2F2F2;
    }
`;

const InputBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background-color:#fafbfc;

    .subjectInput{
        margin-left:5px;
        border: none;
        outline: none;
        background-color:transparent;
    }
`;

const SketchPickerBtn = styled(MdColorLens)`
    font-size: 20px;
    cursor:pointer;

    &:hover{
        color:#A4A4A4;
    }
`;

const DelBtn = styled(MdClose)`
    color:#D8D8D8;
    cursor:pointer;
    &:hover{
        color:#BDBDBD;
    }
`;

const Settings = ({sketchPicker,settings,categoryInput,handleClick,handleChangeComplete,onChange,onSubmit,onDelete}) => {

    if(!settings) return null;
    return (
        <SettingsBlock>
            <ContentBlock>
                <Title><BiPin/><span>Subject Category</span></Title>
                <InputBlock onSubmit={onSubmit}>
                    <InputBox>
                        <SketchPickerBtn style={categoryInput.color===""?{color:"#e1e4e8"}:{color:categoryInput.color}} onClick={handleClick}/>
                        {
                            sketchPicker 
                            &&
                            (
                                <CustomSketchPicker
                                    color={categoryInput.color}
                                    onShowSketchPicker={handleClick}
                                    onChangeComplete={handleChangeComplete}
                                />
                            )
                        }
                        <input type="text" className="subjectInput" placeholder="추가할 과목명을 입력하세요" value={categoryInput.text} onChange={onChange}/>
                    </InputBox>
                    <button type="submit" className="addBtn">+</button>
                </InputBlock>
                <SubjectCategoryBlock>
                    {
                        settings.SubjectCategory.map((category)=>(
                            <SubjectCategoryItem key={category._id}>
                                <ItemWrap>
                                    <div className="color" style={{backgroundColor:category.color}}/>
                                    <div className="subject">{category.subject}</div>
                                    <DelBtn onClick={()=>onDelete(category._id)}/>
                                </ItemWrap>
                            </SubjectCategoryItem>
                        ))
                    }
                    
                </SubjectCategoryBlock>
            </ContentBlock>
        </SettingsBlock>
    );
};

export default Settings;