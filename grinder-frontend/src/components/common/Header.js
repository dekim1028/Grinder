import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdCancel } from 'react-icons/md';

const HeaderBlock = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	background-color: #66ccb6;
	padding: 0 1.5rem;
	z-index: 999;
`;

const LogoBlock = styled(Link)`
	color: white;
	font-size: 25px;
	font-weight: bold;
`;

const Logo = styled(Link)`
	display: block;
	padding: 5px;
	font-size: 30px;
	font-weight: bold;
	color: #135461;
`;

const MenuBlock = styled.div`
	width: 100%;
	height: 100%;
	transition: 1s;
	position: fixed;
	display: flex;
	z-index: 999;
	background: rgba(255, 255, 255, 0.5);

	&.hidden {
		margin-left: -100%;
	}
`;

const Wrap = styled.div`
	width: 300px;
	height: 100%;
	padding: 50px 20px;
	background-color: white;
	box-shadow: 1px 1px 5px grey;

	@media (max-width: 768px) {
		width: 85%;
	}
`;

const Menu = styled(Link)`
	display: block;
	margin: 20px 0;
	padding: 10px;
	font-weight: 500;
	font-size: 18px;
	color: #062438;
	border-bottom: 1px dashed #e6e6e6;
	&:hover {
		color: #0d4253;
	}
`;

const StyledButton = styled(Button)`
	width: 100%;
	height: 40px;
	margin: 0 auto;
	border: 1px solid white;
	color: white;
`;

const StyldfCancel = styled(MdCancel)`
	margin: 10px 0 0 5px;
	font-size: 30px;
	color: gray;
	cursor: pointer;
	&:hover {
		color: #a4a4a4;
	}
`;

const Space = styled.div`
	height: 50px;
`;

const HamburgerMenu = styled(GiHamburgerMenu)`
	color: white;
	margin-right: 10px;
	font-size: 25px;
	cursor: pointer;
`;

const Header = ({ onLogout }) => {
	const [hidden, setHidden] = useState(true);

	const onHidden = () => {
		setHidden(!hidden);
	};

	return (
		<>
			<HeaderBlock>
				<HamburgerMenu onClick={onHidden} />
				<LogoBlock to="/">GRINDER</LogoBlock>
			</HeaderBlock>
			<MenuBlock className={cn({ hidden })}>
				<Wrap>
					<Logo to="/">GRINDER</Logo>
					<Menu to="/study">Start Study</Menu>
					<Menu to="/planner">My Planner</Menu>
					<StyledButton onClick={onLogout}>Logout</StyledButton>
				</Wrap>
				<StyldfCancel onClick={onHidden} />
			</MenuBlock>
			<Space />
		</>
	);
};

export default Header;
