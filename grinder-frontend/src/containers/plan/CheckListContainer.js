import React,{useRef,useState, useCallback,useEffect} from 'react';
import CheckList from '../../components/plan/CheckList';
import { useDispatch, useSelector } from 'react-redux';
import {changeField} from '../../modules/planner';

const CheckListContainer = () => {
    const dispatch = useDispatch();

    const {checkList} = useSelector(({planner})=>({
        checkList:planner.planner.checkList
    }));
    let startId = useRef(checkList?checkList.length+1:1);
    const [newCheckList,setNewCheckList] = useState([]);

    const onAdd = useCallback(() =>{
        const newArr = {
            id:startId.current,
            subject:null,
            content:null,
        };
        setNewCheckList(newCheckList.concat(newArr));
        startId.current+=1;
    },[newCheckList,startId]);

    const onChange = useCallback(e=>{
        const {id,name,value} = e.target;
        setNewCheckList(
            newCheckList.map(item=>{
                if(item.id===parseInt(id)){
                    item[name]=value;
                }
                return item;       
            })
        );
    },[newCheckList]);

    const onDelete = useCallback((itemId) =>{
        const newArr = newCheckList.filter(item=>{
            return item.id!==itemId;
        });
        setNewCheckList(newArr);
    },[newCheckList]);

    const onSubmit = e => {
        e.preventDefault();
        dispatch(changeField({
            key:"checkList",
            value:checkList?checkList.concat(newCheckList):newCheckList,
        }));
    };

    useEffect(()=>{
        setNewCheckList([]);
    },[checkList]);

    return (
        <CheckList
            checkList={checkList}
            newCheckList={newCheckList}
            onAdd={onAdd}
            onDelete={onDelete}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default CheckListContainer;