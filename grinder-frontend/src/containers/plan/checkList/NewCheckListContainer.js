import React,{useState,useRef,useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { changeField } from '../../../modules/planner';
import NewCheckList from '../../../components/plan/checkList/NewCheckList';

const NewCheckListContainer = ({checkList}) => {
    const dispatch = useDispatch();
    const [newCheckList,setNewCheckList] = useState([]);
    let startId = useRef(checkList?checkList.length+1:1);

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