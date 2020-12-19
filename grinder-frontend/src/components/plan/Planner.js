import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PlannerContent from './PlannerContent';
import CheckListContainer from '../../containers/plan/checkList/CheckListContainer';
import Button from '../common/Button';
import 'react-datepicker/dist/react-datepicker.css';
import TimeTableComponent from '../../containers/plan/timetable/TimeTableComponent';

const PlannerBlock = styled.div`
	padding: 25px 10px;
`;

const PlannerPage = styled.div`
	width: 600px;
	margin: 0 auto;
	padding: 20px;
	box-shadow: 1px 1px 5px grey;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const PlannerHeader = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const SaveBtn = styled(Button)`
	font-size: 13px;
	width: 50px;
	height: 25px;
`;

const Planner = ({
	planner,
	plannerError,
	loading,
	plannerDate,
	onChangeText,
	onChangeDate,
	onSave,
}) => {
	if (plannerError) {
		return <PlannerBlock>오류 발생</PlannerBlock>;
	}

	if (loading || !planner) {
		return null;
	}

	return (
		<PlannerBlock>
			<PlannerPage>
				<PlannerHeader>
					<SaveBtn onClick={onSave}>저장</SaveBtn>
				</PlannerHeader>
				<PlannerContent
					type="input"
					name="dday"
					title="디데이"
					value={planner.dday}
					onChange={onChangeText}
				/>
				<PlannerContent title="날짜">
					<DatePicker
						selected={plannerDate}
						onChange={(date) => onChangeDate(moment(date).format('yyyy-MM-DD'))}
						dateFormat="yyyy.MM.dd eee"
						value={moment(planner.date).format('yyyy.MM.DD ddd')}
					/>
				</PlannerContent>
				<PlannerContent
					type="input"
					name="wakeupTime"
					title="오늘의 기상시간"
					value={planner.wakeupTime}
					onChange={onChangeText}
				/>
				<PlannerContent
					type="input"
					name="studyTime"
					title="오늘의 공부시간"
					value={planner.studyTime}
					readOnly
				/>
				<PlannerContent title="오늘의 체크리스트">
					<CheckListContainer />
				</PlannerContent>
				<PlannerContent title="오늘의 시간표">
					<TimeTableComponent />
				</PlannerContent>
			</PlannerPage>
		</PlannerBlock>
	);
};

export default Planner;
