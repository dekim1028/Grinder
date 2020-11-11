import React from 'react';
import styled from 'styled-components';
import {BiDotsVertical} from 'react-icons/bi';

const PlansBlock = styled.div``;

const PlanItem = styled.div`
    width: 100%;
    display:inline-block;
    border: 1px solid #D8D8D8;
    border-radius: 15px;
    padding: 15px 25px;
    margin:0 10px 10px 0;
`;

const PlanHeader = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-bottom:20px;
    .subject{
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
        background:orange;
        border-radius:50%;
        margin-right:5px;
    }

`;

const Plan = () => {
    return (
        <PlansBlock>
            <PlanItem>
                <PlanHeader>
                    <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                    <BiDotsVertical/>
                </PlanHeader>
                <Category>
                    <div className="categoryColor"></div>
                    <div>수학</div>
                </Category>
            </PlanItem>
            <PlanItem>
                <PlanHeader>
                    <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                    <BiDotsVertical/>
                </PlanHeader>
                <Category>
                    <div className="categoryColor"></div>
                    <div>수학</div>
                </Category>
            </PlanItem>
            <PlanItem>
                <PlanHeader>
                    <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                    <BiDotsVertical/>
                </PlanHeader>
                <Category>
                    <div className="categoryColor"></div>
                    <div>수학</div>
                </Category>
            </PlanItem>
            <PlanItem>
                <PlanHeader>
                    <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                    <BiDotsVertical/>
                </PlanHeader>
                <Category>
                    <div className="categoryColor"></div>
                    <div>수학</div>
                </Category>
            </PlanItem>
            <PlanItem>
                <PlanHeader>
                    <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                    <BiDotsVertical/>
                </PlanHeader>
                <Category>
                    <div className="categoryColor"></div>
                    <div>수학</div>
                </Category>
            </PlanItem>
            <PlanItem>
                <PlanHeader>
                    <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                    <BiDotsVertical/>
                </PlanHeader>
                <Category>
                    <div className="categoryColor"></div>
                    <div>수학</div>
                </Category>
            </PlanItem>
            <PlanItem>
                <PlanHeader>
                    <h2 className="subject">수학 문제집 2p~18p 풀기</h2>
                    <BiDotsVertical/>
                </PlanHeader>
                <Category>
                    <div className="categoryColor"></div>
                    <div>수학</div>
                </Category>
            </PlanItem>
        </PlansBlock>
    );
};

export default Plan;