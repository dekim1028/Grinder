import React,{useState} from 'react';
import styled, { css } from 'styled-components';
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import PlannerContent from './PlannerContent';
import CheckList from './CheckList';

const PlannerBlock = styled.div`
    padding: 25px 10px;
`;

const PlannerPage = styled.div`
    width:600px;
    margin:0 auto;
    padding: 5px 20px 20px;
    box-shadow: 1px 1px 5px grey;
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

const Planner = ({planner,plannerError,loading,onChangeText}) => {
    const [startDate, setStartDate] = useState(new Date());

    if(plannerError){
        return <PlannerBlock>오류 발생</PlannerBlock>;
    }

    if(loading||!planner){
        return null;
    }

    return (
        <PlannerBlock>
            <PlannerPage>
                <PlannerContent type="input" name="dday" title="디데이" value={planner.dday} onChange={onChangeText}/>
                <PlannerContent title="날짜" name="date" value={moment(planner.date).format("yyyy.MM.DD ddd")} onChange={onChangeText}>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        dateFormat="yyyy.MM.dd eee"
                        value={moment(planner.date).format("yyyy.MM.DD ddd")}            
                    />
                </PlannerContent>
                <PlannerContent type="input" name="wakeupTime" title="오늘의 기상시간" value={planner.wakeupTime} onChange={onChangeText}/>
                <PlannerContent type="input" name="studyTime" title="오늘의 공부시간" value={planner.studyTime} readOnly/>
                <PlannerContent title="오늘의 체크리스트">
                    <CheckList checkList={planner.checkList}/>
                </PlannerContent>
                <PlannerContent title="오늘의 시간표">
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
                </PlannerContent>
            </PlannerPage>
        </PlannerBlock>
    );
};

export default Planner;