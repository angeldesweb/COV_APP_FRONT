import React from 'react';
import {Form} from 'semantic-ui-react';

const Number = ({label,name,stdOnChange,value,disabled})=>{
    return(
        <Form.Field>
            <label>{label}</label>
            <input type='Number' name={name} onChange={stdOnChange} value={value}/>
        </Form.Field>
    )

}

export default Number