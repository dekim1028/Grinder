import React from 'react';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

const PopOver = styled.div`
	position: absolute;
	z-index: 999;
`;

const Cover = styled.div`
	position: fixed;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
`;

const StyledSketchPicker = styled(SketchPicker)`
	position: absolute;
`;

const CustomSketchPicker = ({
	color,
	onShowSketchPicker,
	onChangeComplete,
}) => {
	return (
		<PopOver>
			<Cover onClick={onShowSketchPicker} />
			<StyledSketchPicker color={color} onChangeComplete={onChangeComplete} />
		</PopOver>
	);
};

export default CustomSketchPicker;
