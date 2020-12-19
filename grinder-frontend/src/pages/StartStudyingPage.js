import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import StartStudyContainer from '../containers/study/StartStudyContainer';

const StartStudyingPage = () => {
	return (
		<>
			<HeaderContainer />
			<Responsive>
				<StartStudyContainer />
			</Responsive>
		</>
	);
};

export default StartStudyingPage;
