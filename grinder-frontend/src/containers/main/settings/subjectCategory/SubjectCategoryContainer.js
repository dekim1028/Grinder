import React,{useState}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategoryInput, initializeCategoryInput, addCategory, deleteCategory} from '../../../../modules/settings';
import SubjectCategory from '../../../../components/main/settings/subjectCategory/SubjectCategory';

const SubjectCategoryContainer = () => {

    const dispatch = useDispatch();
    const [sketchPicker,setSketchPicker] = useState(false);
    const {settings,categoryInput} = useSelector(({settings})=>({
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
            key:"subject",
            value
        }));
    };

    const onSubmit = e =>{
        e.preventDefault();
        if(categoryInput.color===""){
            alert("색상을 선택해주세요");
            return;
        }else if(categoryInput.subject===""){
            alert("과목명을 입력해주세요");
            return;
        }
        
        dispatch(addCategory({
            id:settings._id,
            item:{
                color:categoryInput.color,
                subject:categoryInput.subject,
            }
        }));

        dispatch(initializeCategoryInput());
    };

    const onDelete = categoryId =>{
        dispatch(deleteCategory({
            id:settings._id,
            categoryId
        }));
    };

    return (
        <SubjectCategory
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

export default SubjectCategoryContainer;