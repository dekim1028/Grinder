import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyle = css`
	background-color: #66ccb6;
	border: none;
	outline: none;
	cursor: pointer;
	color: white;
	border-radius: 4px;
	font-weight: bold;
	font-size: 15px;
	width: 90px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover {
		background-color: #8fe2d0;
	}
`;

const ButtonBlock = styled.button`
	${ButtonStyle}
`;

const LinkBlock = styled(Link)`
	${ButtonStyle}
`;

const Button = (props) => {
	return props.to ? <LinkBlock {...props} /> : <ButtonBlock {...props} />;
};

export default Button;
