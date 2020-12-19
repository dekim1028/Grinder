import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OriginCheckList from '../../../components/plan/checkList/OriginCheckList';
import WorkSelectionModalContiner from './WorkSelectionModalContiner';
import { setUpdateTarget } from '../../../modules/checkList';

const OriginCheckListContainer = () => {
	const dispatch = useDispatch();
	const [visible, setVisible] = useState(false);

	const { checklist } = useSelector(({ checkList }) => ({
		checklist: checkList.checklist,
	}));

	const onVisible = (id) => {
		setVisible(!visible);
		if (checklist) {
			const { list } = checklist;
			dispatch(setUpdateTarget(list.filter((item) => item._id === id)[0]));
		}
	};

	return (
		<>
			<OriginCheckList checklist={checklist} onVisible={onVisible} />
			<WorkSelectionModalContiner visible={visible} onVisible={onVisible} />
		</>
	);
};

export default OriginCheckListContainer;
