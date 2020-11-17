import React,{useState,useRef,useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewCheckList from '../../../components/plan/checkList/NewCheckList';
import { addChecklistItem } from '../../../modules/checkList';

const NewCheckListContainer = () => {
    const dispatch = useDispatch();
    const [newCheckList,setNewCheckList] = useState([]);
    const {checklist,settings} = useSelector(({checkList,settings})=>({
        checklist:checkList.checklist,
        settings:settings.settings
    }));
    let startId = useRef(0);

    const onAdd = useCallback(() =>{
        const newArr = {
            id:startId.current,
            subjectCategoryId:"",
            color:"",
            subject:"",
            content:"",
            check:false,
            startTime:"",
            endTime:"",
        };
        setNewCheckList(newCheckList.concat(newArr));
        startId.current+=1;
    },[newCheckList,startId]);

    const onChange = useCallback(e=>{
        const {id,name,value} = e.target;
        setNewCheckList(
            newCheckList.map(item=>{
                if(item.id===parseInt(id)){
                    if(name==="subject"){
                        const {SubjectCategory} = settings;
                        const selected = SubjectCategory.filter(item=>item._id===value)[0];
                        const {_id,color,subject} = selected;
                        item.subjectCategoryId = _id;
                        item.color = color;
                        item.subject = subject;
                    }else{
                        item[name]=value;
                    }
                }
                return item;       
            })
        );
    },[newCheckList,settings]);

    const onDelete = useCallback((itemId) =>{
        const newArr = newCheckList.filter(item=>{
            return item.id!==itemId;
        });
        setNewCheckList(newArr);
    },[newCheckList]);

    const onSubmit = e => {
        e.preventDefault();
        
        const filterList = newCheckList.filter(
            item=>(item.subject!=='' && item.content!=='')
        );

        dispatch(addChecklistItem({
            id:checklist._id,
            newCheckList:filterList
        }));
        setNewCheckList([]);
    };

    return (
        <NewCheckList
            newCheckList={newCheckList}
            settings={settings}
            onAdd={onAdd}
            onChange={onChange}
            onDelete={onDelete}
            onSubmit={onSubmit}
        />
    );
};

export default NewCheckListContainer;