import React from 'react';
import OriginCheckListItem from './OriginCheckListItem';

const OriginCheckList = ({checkList,onClick}) => {
    return (
        <>
            {
                checkList &&
                    checkList.map((item)=>(
                        <OriginCheckListItem key={`originCheckList_${item._id}`} item={item}/>
                    ))
            }
        </>
    );
};

export default OriginCheckList;

            
