import React from 'react';
import styled, { css } from 'styled-components';
import cn from 'classnames';
import Button from '../../common/Button';

const PlansBlock = styled.div``;

const PlanItem = styled.div`
	width: 100%;
	display: inline-block;
	border: 1px solid #d8d8d8;
	border-radius: 15px;
	padding: 15px;
	margin: 0 10px 10px 0;

	&:hover,
	&.target {
		background-color: #f2f2f2;
	}
`;

const itemStatusStyle = css`
	width: 50px;
	text-align: center;
	border-radius: 4px;
	padding: 3px;
	margin-right: 10px;
	font-size: 12px;
	color: white;
`;

const PlanHeader = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-bottom: 20px;
	.content {
		font-size: 15px;
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.complete {
		${itemStatusStyle}
		background-color: #A4A4A4;
	}

	.continue {
		${itemStatusStyle}
		background-color: #31B404;
	}

	.noComplete {
		${itemStatusStyle}
		background-color: #B40404;
	}
`;

const Category = styled.div`
	display: flex;
	align-items: baseline;
	font-size: 13px;

	.categoryColor {
		width: 11px;
		height: 11px;
		border-radius: 50%;
		margin-right: 5px;
	}
`;

const NoData = styled.div`
	height: 180px;
	text-align: center;
	font-size: 14px;
	padding-top: 60px;
	color: #2e2e2e;
`;

const PlannerButton = styled(Button)`
	width: 175px;
	font-size: 13px;
	margin: 0 auto;
	margin-top: 10px;
`;

const OverviewPlanItem = ({ item, onClick, target }) => {
	return (
		<PlanItem onClick={() => onClick(item)} className={cn({ target })}>
			<PlanHeader>
				{item.startTime !== '' && item.endTime !== '' ? (
					<div className="complete">완료</div>
				) : item.startTime !== '' && item.endTime === '' ? (
					<div className="continue">진행중</div>
				) : (
					<div className="noComplete">미완료</div>
				)}
				<h2 className="content">{item.content}</h2>
			</PlanHeader>
			<Category>
				<div
					className="categoryColor"
					style={{ backgroundColor: `${item.color}` }}
				></div>
				<div>{item.subject}</div>
			</Category>
		</PlanItem>
	);
};

const OverviewPlan = ({ plan, onClick, studyTarget }) => {
	if (!plan) return null;
	return (
		<PlansBlock>
			{plan.length > 0 ? (
				plan.map((item) => (
					<OverviewPlanItem
						key={item._id}
						item={item}
						onClick={onClick}
						target={studyTarget ? studyTarget._id === item._id : false}
					/>
				))
			) : (
				<NoData>
					조회할 데이터가 없습니다.
					<PlannerButton to="/planner">Create today's Plan</PlannerButton>
				</NoData>
			)}
		</PlansBlock>
	);
};

export default OverviewPlan;
