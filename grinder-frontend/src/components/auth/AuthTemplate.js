import React from 'react';
import AuthForm from './AuthForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f2f2f2;

	form {
		width: 400px;

		@media (max-width: 768px) {
			margin: 0 25px;
		}
	}
`;

const Title = styled.div`
	text-align: center;
	padding: 10px 0 20px;

	a {
		font-weight: 500;
		font-size: 28px;
		color: darkslategray;
	}
`;

const AuthTemplate = ({ type, form, onChange, onSubmit, error }) => {
	return (
		<AuthTemplateBlock>
			<AuthForm
				type={type}
				form={form}
				onChange={onChange}
				onSubmit={onSubmit}
				error={error}
			>
				<Title>
					<Link to="/">GRINDER</Link>
				</Title>
			</AuthForm>
		</AuthTemplateBlock>
	);
};

export default AuthTemplate;
