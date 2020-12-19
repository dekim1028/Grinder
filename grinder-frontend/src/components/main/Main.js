import React, { useState } from 'react';
import styled from 'styled-components';
import { FiBook, FiSettings } from 'react-icons/fi';
import cn from 'classnames';
import SettingsContainer from '../../containers/main/settings/SettingsContainer';
import OverviewContainer from '../../containers/main/overview/OverviewContainer';

const MainBlock = styled.div`
	width: 800px;
	display: flex;
	justify-content: center;
	padding: 50px 0;
	margin: 0 auto;

	@media (max-width: 768px) {
		width: 100%;
		display: block;
	}
`;

const ContentBlock = styled.div``;

const MainHeader = styled.nav`
	svg {
		font-size: 18px;
		vertical-align: middle;
		margin-right: 3px;
	}
`;

const NavItem = styled.a`
	width: 50%;
	display: inline-block;
	padding: 10px;
	text-align: center;
	border-bottom: 1px solid #d8d8d8;
	transition: border-bottom-color 0.36s ease-in;
	svg {
		color: #6e6e6e;
	}

	&:hover {
		border-bottom: 2px solid #bdbdbd;
	}

	&.click {
		border-bottom: 2px solid #ff9d84;
		font-weight: 600;
		svg {
			color: black;
		}
	}
`;

const Text = styled.span`
	font-size: 15px;
	vertical-align: bottom;
`;

const Main = () => {
	const [view, setView] = useState('overview');

	const onClick = (target) => {
		setView(target);
	};

	return (
		<MainBlock>
			<ContentBlock>
				<MainHeader>
					<NavItem
						href="#"
						className={cn({ click: view === 'overview' })}
						onClick={() => onClick('overview')}
					>
						<FiBook />
						<Text>Overview</Text>
					</NavItem>
					<NavItem
						href="#"
						className={cn({ click: view === 'settings' })}
						onClick={() => onClick('settings')}
					>
						<FiSettings />
						<Text>Settings</Text>
					</NavItem>
				</MainHeader>
				{view === 'overview' ? <OverviewContainer /> : <SettingsContainer />}
			</ContentBlock>
		</MainBlock>
	);
};

export default Main;
