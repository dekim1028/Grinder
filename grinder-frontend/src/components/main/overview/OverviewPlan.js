import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const PlansBlock = styled.div``;

const PlanItem = styled.div`
    width: 100%;
    display:inline-block;
    border: 1px solid #D8D8D8;
    border-radius: 15px;
    padding: 15px 25px;
    margin:0 10px 10px 0;

    &:hover, &.target{
        background-color:#F2F2F2;
    }
`;

const PlanHeader = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-bottom:20px;
    .content{
        font-size: 15px;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const Category = styled.div`
    display:flex;
    align-items:baseline;
    font-size: 13px;

    .categoryColor{
        width:11px;
        height:11px;
        border-radius:50%;
        margin-right:5px;
    }

`;

const OverviewPlanItem = ({item,onClick,target}) =>{
    return (
        <PlanItem onClick={()=>onClick(item)} className={cn({target})}>
            <PlanHeader>
                <h2 className="content">{item.content}</h2>
            </PlanHeader>
            <Category>
                <div className="categoryColor" style={{backgroundColor:`${item.color}`}}></div>
                <div>{item.subject}</div>
            </Category>
        </PlanItem>
    );
}

const OverviewPlan = ({plan,onClick,studyTarget}) => {
    if(!plan) return null;
    return (
        <PlansBlock>
            {
                plan.map(item=>(
                    <OverviewPlanItem
                        key={item._id}
                        item={item}
                        onClick={onClick}
                        target={studyTarget?studyTarget._id===item._id:false}
                    />
                ))
            }
        </PlansBlock>
    );
};

export default OverviewPlan;