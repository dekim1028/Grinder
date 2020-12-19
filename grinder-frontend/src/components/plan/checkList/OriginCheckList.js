import React from 'react';
import OriginCheckListItem from './OriginCheckListItem';

const OriginCheckList = ({ checklist, onVisible }) => {
	if (!checklist) return null;
	return (
		<>
			{checklist.list &&
				checklist.list.map((item) => (
					<OriginCheckListItem
						key={`originCheckList_${item._id}`}
						item={item}
						onClick={() => onVisible(item._id)}
					/>
				))}
		</>
	);
};

export default OriginCheckList;
