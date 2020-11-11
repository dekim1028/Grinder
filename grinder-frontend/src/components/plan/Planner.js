import React from 'react';
import styled, { css } from 'styled-components';
import InputDate from '../common/InputDate';
import Button from '../common/Button';

const PlannerBlock = styled.div`
    padding: 25px 10px;
`;

const PlannerPage = styled.div`
    width:600px;
    margin:0 auto;
    padding: 5px 20px 20px;
    box-shadow: 1px 1px 5px grey;
`;

const PlannerContent = styled.div`
    display:inline-box;
    width:50%;

    .content_div{
        width:100%;
        padding-right:30px;

        .title{
            margin: 20px 0 5px;
            font-size: 13px;
            color:#135461;
        }
        .react-datepicker-wrapper{
            display:block;
        }
    }
`;

const inputStyle = css`
    width:100%;
    font-size: 20px;
    font-weight:bold;
    border: none;
    outline: none;
    border-bottom: 1px dashed #135461;
    caret-color:#135461;
    font-family: 'Rix오늘의만화',Comic Sans MS;
`;

const InputBox = styled.input`
    ${inputStyle}
    &:read-only{
        cursor: auto;
    }
`;

const StyledInputDate = styled.input`
    ${inputStyle}
    cursor: pointer;
`;

const CheckList =styled.div`
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

const TimeTable = styled.table`
    width: 100%;
    margin-top:15px;
    font-size: 10px;
    border:1px solid #135461;
    border-collapse:collapse;
    color:#135461;

    th,td{
        padding: 0;
        border:1px solid #135461;
        height:22px;

        .study_check{
            background-color:red;
            opacity: 0.7;
            width: 100%;
            height: 70%;
        }
    }
`;

const Planner = () => {
    return (
        <PlannerBlock>
            <PlannerPage>
                <PlannerContent>
                    <div className="content_div">
                        <h1 className="title">| 디데이</h1>
                        <InputBox type="text"/>
                    </div>
                </PlannerContent>
                <PlannerContent>
                    <div className="content_div">
                        <h1 className="title">| 날짜</h1>
                        <InputDate StyledInputDate={StyledInputDate}/>
                    </div>
                </PlannerContent>
                <PlannerContent>
                    <div className="content_div">
                        <h1 className="title">| 오늘의 기상시간</h1>
                        <InputBox type="text"/>
                    </div>
                </PlannerContent>
                <PlannerContent>
                    <div className="content_div">
                    <h1 className="title">| 오늘의 공부시간</h1>
                        <InputBox type="text" readOnly/>
                    </div>
                </PlannerContent>
                <PlannerContent>
                    <div className="content_div">
                        <h1 className="title">| 오늘의 체크리스트</h1>
                        <CheckList>
                            <Item>
                                <div className="subject category">수학</div>
                                <div className="content">수학 문제집 2p~18p 풀기</div>
                                <input className="checkbox" type="checkbox"></input>
                            </Item>
                            <Item>
                                <div className="subject"></div>
                                <div className="content">수학 수행평가하기</div>
                                <input className="checkbox" type="checkbox"></input>
                            </Item>
                            <Item>
                                <div className="subject category">국어</div>
                                <div className="content">국어 문제집 20p~34p 풀기</div>
                                <input className="checkbox" type="checkbox"></input>
                            </Item>
                        </CheckList>
                        <AddCheckListBtn>추가</AddCheckListBtn>
                    </div>
                </PlannerContent>
                <PlannerContent>
                    <div className="content_div">
                        <h1 className="title">| 오늘의 시간표</h1>
                        <TimeTable>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>10</th>
                                    <th>20</th>
                                    <th>30</th>
                                    <th>40</th>
                                    <th>50</th>
                                    <th>60</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>05</th>
                                    <td><div className="study_check"></div></td>
                                    <td><div className="study_check"></div></td>
                                    <td><div className="study_check"></div></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>06</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>07</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>08</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>09</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>10</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>11</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>12</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>13</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>14</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>15</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>16</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>17</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>18</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>19</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>20</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>21</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>22</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>23</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>24</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </TimeTable>
                    </div>
                </PlannerContent>
            </PlannerPage>
        </PlannerBlock>
    );
};

export default Planner;