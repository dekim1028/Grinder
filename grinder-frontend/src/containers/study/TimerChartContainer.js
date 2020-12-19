import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import TimerChart from '../../components/study/TimerChart';
import {
	setStudyingInfo,
	initializeForm,
	updateStudyTime,
} from '../../modules/study';
import { withRouter } from 'react-router-dom';

const TimerChartContainer = ({ history }) => {
	const dispatch = useDispatch();
	const [start, setStart] = useState(false); //시작여부
	const [time, setTime] = useState(0); //공부시간
	const [chartData, setChartData] = useState([
		{ x: ' ', y: 0 },
		{ x: ' ', y: 100 },
	]);

	const { studyTarget, studyingInfo } = useSelector(({ study }) => ({
		studyTarget: study.studyTarget,
		studyingInfo: study.studyingInfo,
	}));

	const onStart = () => {
		setStart(!start);
		dispatch(
			setStudyingInfo({
				key: 'id',
				value: studyTarget._id,
			}),
		);
		dispatch(
			setStudyingInfo({
				key: 'startTime',
				value: moment(new Date()).format('HH:mm'),
			}),
		);
	};

	const onFinish = () => {
		setStart(!start);
		dispatch(
			setStudyingInfo({
				key: 'endTime',
				value: moment(new Date()).format('HH:mm'),
			}),
		);
	};

	useEffect(() => {
		let timer = null;
		if (start) {
			timer = setInterval(() => {
				setTime(time + 1);
				setChartData([
					{ x: ' ', y: time },
					{ x: ' ', y: 100 - time },
				]);
			}, 60000);
		} else {
			clearInterval(timer);
		}

		return () => {
			clearInterval(timer);
		};
	}, [start, time]);

	useEffect(() => {
		if (studyingInfo.startTime && studyingInfo.endTime) {
			dispatch(updateStudyTime({ studyingInfo }));
			alert('정상적으로 기록되었습니다.');
			history.push('/planner');
		}
	}, [dispatch, history, studyingInfo]);

	useEffect(() => {
		return () => {
			dispatch(initializeForm());
		};
	}, [dispatch]);

	return (
		<TimerChart
			studyTarget={studyTarget}
			studyingInfo={studyingInfo}
			onStart={onStart}
			onFinish={onFinish}
			chartData={chartData}
			start={start}
			time={time}
		/>
	);
};

export default withRouter(TimerChartContainer);
