import React from 'react';
import {Form,Input} from 'semantic-ui-react';

const Field = ({label,name,placeholder,onChange,type,value,disabled})=>{
    if(type === 'text'){
        return(
            <Form.Field
                type={type || 'text'}
                label={label}
                control={Input}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
            />
        )
    }
    return(
        <Form.Field>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} name={name} onChange={onChange} />
        </Form.Field>
    )

}

export default Field