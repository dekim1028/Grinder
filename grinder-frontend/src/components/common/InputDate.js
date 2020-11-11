import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomInput= (props) =>{
    return(
        <props.StyledInputDate
            onClick={props.onClick}
            value={props.value}
            type="text"
            readOnly={true}
        />
    )
};

const InputDate = ({StyledInputDate}) => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePicker
            customInput={<CustomInput StyledInputDate={StyledInputDate}/>}
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="yyyy.MM.dd eee"            
        />
    );
};

export default InputDate;