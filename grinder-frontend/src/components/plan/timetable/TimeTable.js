import React from 'react';
import styled from 'styled-components';
import timetable from '../../../style/img/timetable.jpg';

const TimeTableBlock = styled.div`
	width: 100%;
	margin-top: 15px;
	font-size: 13px;
	color: #135461;
`;

const MinuteBlock = styled.div`
	display: flex;
`;

const Minute = styled.div`
	width: 13%;
	padding: 5px 8px;
	text-align: center;
	font-weight: 500;
	border-bottom: 1px solid;
	border-right: 1px solid;
	&.text {
		width: 22%;
		font-weight: bold;
	}
`;

const TimeBlock = styled.div`
	display: flex;
`;

const HourBlock = styled.div`
	width: 22.2%;
`;

const Hour = styled.div`
	padding: 5px;
	text-align: center;
	font-weight: 500;
	border-bottom: 1px solid;
	border-right: 1px solid;
`;

const TimeListBlock = styled.div`
	width: 79%;
	background-repeat: repeat-y;
	background-size: 100% 40%;
	.item {
		width: 20px;
		height: 20px;
		border-radius: 5px;
		position: relative;
	}
`;

const TimeTable = ({ timeTableList }) => {
	return (
		<TimeTableBlock>
			<MinuteBlock>
				<Minute className="text">TIME</Minute>
				<Minute>10</Minute>
				<Minute>20</Minute>
				<Minute>30</Minute>
				<Minute>40</Minute>
				<Minute>50</Minute>
				<Minute>60</Minute>
			</MinuteBlock>
			<TimeBlock>
				<HourBlock>
					<Hour>00</Hour>
					<Hour>01</Hour>
					<Hour>02</Hour>
					<Hour>03</Hour>
					<Hour>04</Hour>
					<Hour>05</Hour>
					<Hour>06</Hour>
					<Hour>07</Hour>
					<Hour>08</Hour>
					<Hour>09</Hour>
					<Hour>10</Hour>
					<Hour>11</Hour>
					<Hour>12</Hour>
					<Hour>13</Hour>
					<Hour>14</Hour>
					<Hour>15</Hour>
					<Hour>16</Hour>
					<Hour>17</Hour>
					<Hour>18</Hour>
					<Hour>19</Hour>
					<Hour>20</Hour>
					<Hour>21</Hour>
					<Hour>22</Hour>
					<Hour>23</Hour>
					<Hour>24</Hour>
				</HourBlock>
				<TimeListBlock style={{ backgroundImage: `url(${timetable})` }}>
					{timeTableList.map((item, index) => (
						<div
							key={`${item._id}_${index}`}
							className="item"
							style={{
								width: `${item.width * 1.65}%`,
								top: `${item.top}%`,
								left: `${item.left * 1.67}%`,
								backgroundColor: `${item.color}`,
							}}
						/>
					))}
				</TimeListBlock>
			</TimeBlock>
		</TimeTableBlock>
	);
};

export default TimeTable;
