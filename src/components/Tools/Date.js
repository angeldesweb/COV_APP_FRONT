import React from 'react';
import {Form} from 'semantic-ui-react';

const Date = ({label,name,onDateChange,value,disabled})=>{
    return(
        <Form.Field>
            <label>{label}</label>
            <input type='Date' name={name} onChange={onDateChange} valueasnumber={value}/>
        </Form.Field>
    )

}

export default Date