import React,{useState,useRef,useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewCheckList from '../../../components/plan/checkList/NewCheckList';
import { updateChecklist } from '../../../modules/checkList';

const NewCheckListContainer = () => {
    const dispatch = useDispatch();
    const [newCheckList,setNewCheckList] = useState([]);
    const {checklist} = useSelector(({checkList})=>({
        checklist:checkList.checklist
    }));
    let startId = useRef(0);

    const onAdd = useCallback(() =>{
        const newArr = {
            id:startId.current,
            subject:null,
            content:null,
            check:false,
            startTime:null,
            endTime:null,
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
        const {list} = checklist;
        const newArr = list?list.concat(newCheckList.filter(
            item=>(item.content!==null && item.content!=='')
        )):newCheckList;
        dispatch(updateChecklist({...checklist,list:newArr}));
        setNewCheckList([]);
    };

    return (
        <NewCheckList
            newCheckList={newCheckList}
            onAdd={onAdd}
            onChange={onChange}
            onDelete={onDelete}
            onSubmit={onSubmit}
        />
    );
};

export default NewCheckListContainer;