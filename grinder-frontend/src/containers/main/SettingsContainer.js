import React,{useState, useEffect} from 'react';
import Settings from '../../components/main/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategoryInput, readSettings, addCategory, deleteCategory, initializeCategoryInput } from '../../modules/settings';

const SettingsContainer = () => {
    const dispatch = useDispatch();
    const [sketchPicker,setSketchPicker] = useState(false);
    const {user,settings,categoryInput} = useSelector(({user,settings})=>({
        user:user.user,
        settings:settings.settings,
        categoryInput:settings.categoryInput
    }));

    const handleClick = () => {
        setSketchPicker(!sketchPicker);
    };

    const handleChangeComplete = (color) => {
        dispatch(changeCategoryInput({
            key:"color",
            value:color.hex
        }));
    };

    const onChange = e =>{
        const {value} = e.target;
        dispatch(changeCategoryInput({
            key:"text",
            value
        }));
    };

    const onSubmit = e =>{
        e.preventDefault();
        if(categoryInput.color===""){
            alert("색상을 선택해주세요");
            return;
        }else if(categoryInput.text===""){
            alert("과목명을 입력해주세요");
            return;
        }
        
        dispatch(addCategory({
            id:settings._id,
            item:{
                color:categoryInput.color,
                subject:categoryInput.text,
            }
        }));

        dispatch(initializeCategoryInput());
    };

    const onDelete = categoryId =>{
        console.log(typeof categoryId);
        dispatch(deleteCategory({
            id:settings._id,
            categoryId
        }));
    };

    useEffect(()=>{
        dispatch(readSettings(user.userid));
    },[dispatch,user.userid]);

    return (
        <Settings
            sketchPicker={sketchPicker}
            settings={settings}
            categoryInput={categoryInput}
            handleClick={handleClick}
            handleChangeComplete={handleChangeComplete}
            onChange={onChange}
            onSubmit={onSubmit}
            onDelete={onDelete}
        />
    );
};

export default SettingsContainer;