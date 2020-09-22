import React from 'react';
import LoginForm from './LoginForm';
import {fields,initialValues} from './loginFields';

const LoginFormBox =({history})=>{
    console.log(fields,initialValues)
    return(
        <LoginForm fields={fields} initialValues={initialValues} btnName='Registrar' history={history}/>
    )
}

export default LoginFormBox