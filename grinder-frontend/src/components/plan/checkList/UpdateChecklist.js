import React, { useState } from 'react';
import styled from 'styled-components';
import TimePicker from 'react-time-picker';
import Button from '../../common/Button';

const UpdateChecklistBlock = styled.div`
    padding: 0 10px;

    svg{
        font-size: 20px;
        color:#B40404;
    }

    svg:hover{
        color:#ff0000;
    }
`;

const InputBlock = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:10px;

    .subject{
        border: none;
        color: #135461;
        font-weight: 600;
        outline: none;
    }

    .content{
        width:100%;
        outline: none;
        border: none;
        border-bottom: 1px solid #135461;
        padding: 0 5px 3px;
        font-size: 14px;
    }

    .react-time-picker__clear-button,
    .react-time-picker__button{
        display:none;
    }

    .react-time-picker__clock,
    .react-time-picker__clock--open{
        display:none;
    }

    .react-time-picker__wrapper{
        border:none;
    }

    .react-time-picker__inputGroup__input,
    .react-time-picker__inputGroup__amPm,
    .react-time-picker__inputGroup__leadingZero{
        border: none;
        font-size: 14px;
        color: #135461;
        font-weight: 600;
        outline: none;
    }
`;

const TimeBlock = styled.div`
    margin: 0 auto;
`;

const ConfirmBtn = styled(Button)`
    width: 50px;
    height: 25px;
    margin: 0 auto;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
`;


const UpdateChecklist = ({target,onChange,onUpdate}) => {
    
    const [startTime,setStartTime] = useState('10:00');
    const [endTime,setEndTime] = useState('18:00');
     
    const onChangeStartTime = time => setStartTime(startTime);
    const onChangeEndTime = time => setEndTime(endTime);

    if(!target) return null;
    return (
        <UpdateChecklistBlock>
            <InputBlock>
                <select className="subject" name="subject" value={target.subject} onChange={onChange}>
                    <option value="수학">수학</option>
                    <option value="국어">국어</option>
                    <option value="영어">영어</option>
                    <option value="과학">과학</option>
                    <option value="한국사">한국사</option>
                </select>
            </InputBlock>
            <InputBlock>
                <input className="content" type="text" name="content" value={target.content} onChange={onChange}/>
            </InputBlock>
            <InputBlock>
                <TimeBlock>
                    <TimePicker
                        value={startTime}
                        onChange={onChangeStartTime}
                    />
                    ~
                    <TimePicker
                        value={endTime}
                        onChange={onChangeEndTime}
                    />
                </TimeBlock>
            </InputBlock>
            <ConfirmBtn onClick={onUpdate}>변경</ConfirmBtn>
        </UpdateChecklistBlock>
    );
};

export default UpdateChecklist;