import React from 'react';
import styled, { css } from 'styled-components';
import cn from 'classnames';

const inputStyle = css`
	width: 100%;
	font-size: 20px;
	font-weight: bold;
	border: none;
	outline: none;
	border-bottom: 1px dashed #135461;
	caret-color: #135461;
	font-family: 'Rix오늘의만화', Comic Sans MS;
`;

const PlannerContentBlock = styled.div`
	display: inline-box;
	width: 50%;

	.content_div {
		width: 100%;
		padding-right: 30px;

		.title {
			margin: 20px 0 5px;
			font-size: 13px;
			color: #135461;
		}

		.react-datepicker-wrapper {
			display: block;
		}

		.react-datepicker__input-container input {
			${inputStyle};
			caret-color: transparent;
			cursor: pointer;
		}
	}

	@media (max-width: 768px) {
		width: 100%;
		.content_div {
			padding-right: 0;
		}
	}
`;

const InputBox = styled.input`
	${inputStyle}
	&:read-only {
		cursor: auto;
	}
`;

const PlannerContent = ({
	type,
	name,
	title,
	value,
	children,
	onChange,
	...props
}) => {
	return (
		<PlannerContentBlock>
			<div className="content_div">
				<h1 className="title">| {title}</h1>
				{type === 'input' ? (
					<InputBox
						type="text"
						name={name}
						value={value ? value : ''}
						onChange={onChange}
						{...props}
					/>
				) : (
					children
				)}
			</div>
		</PlannerContentBlock>
	);
};

export default PlannerContent;
