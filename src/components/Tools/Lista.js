import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

const Lista = ({label,name,placeholder,options,onChange})=>{
    return(
        <Form.Field>
            <label>{label}</label>
            <Dropdown
                fluid
                selection
                search
                name={name}
                placeholder={placeholder}
                options={options}
                onChange={onChange}
            />
        </Form.Field>
    )
}
export default Lista