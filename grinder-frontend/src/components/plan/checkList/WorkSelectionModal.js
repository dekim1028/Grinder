import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../../common/Button';
import {RiCloseLine} from 'react-icons/ri';
import UpdateCheclistContainer from '../../../containers/plan/checkList/UpdateCheclistContainer';

const ModalBackBlock = styled.div`
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    padding: 15% 0;
    background-color:rgba( 255, 255, 255, 0.5 );;
    z-index:998;
`;

const ModalBlock = styled.div`
    box-shadow: 2px 2px 4px grey;
    width: 300px;
    margin: 0 auto;
    padding: 5px 5px 20px;
    background-color:white;
`;

const ModalTitle = styled.div`
    margin-bottom: 15px;
    text-align: right;
    
    svg{
        font-size: 18px;
        color: gray;
    }

    svg:hover{
        color: lightgray;
    }
`;

const ModalContent = styled.div`
    .modalText{
        text-align:center;
    }
`;

const ButtonBlock = styled.div`
    display:flex;
    justify-content: center;
    margin-top:15px;
`;

const ModalBtnStyle = css`
    width: 50px;
    height: 25px;
    margin-right: 5px;
    font-size: 14px;
    font-weight: 500;
`;

const CancelBtn = styled(Button)`
    ${ModalBtnStyle}
    background-color:#E6E6E6;
    color:gray;
    &:hover{
        background-color:#F2F2F2;
    }
`;

const ConfirmBtn = styled(Button)`
    ${ModalBtnStyle}
`;

const WorkSelectionModal = ({visible,targetItem,status,onConfirm,onChangeStatus}) => {

    if(!visible) return null;
    return (
        <ModalBackBlock>
            <ModalBlock>
                <ModalTitle>
                    <RiCloseLine onClick={onConfirm}/>
                </ModalTitle>
                    {
                        status===''?(
                            <ModalContent>
                                <div className="modalText">
                                    원하시는 작업을 선택하세요
                                </div>
                                <ButtonBlock>
                                    <ConfirmBtn onClick={()=>onChangeStatus('update')}>수정</ConfirmBtn>
                                    <CancelBtn onClick={()=>onChangeStatus('delete')}>삭제</CancelBtn>
                                </ButtonBlock>
                            </ModalContent>
                        ):status==='update'?(
                            <ModalContent>
                                <UpdateCheclistContainer targetItem={targetItem} onConfirm={onConfirm}/>
                            </ModalContent>
                        ):(
                            <ModalContent>
                                <div className="modalText">
                                    삭제되었습니다
                                </div>
                                <ButtonBlock>
                                    <CancelBtn onClick={onConfirm}>확인</CancelBtn>
                                </ButtonBlock>
                            </ModalContent>
                        )
                    }
            </ModalBlock>
        </ModalBackBlock>
    );
};

export default WorkSelectionModal;