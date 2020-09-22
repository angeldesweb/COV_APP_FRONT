import React, { Fragment } from 'react'
import { useMutation } from '@apollo/react-hooks';
import { Form } from 'semantic-ui-react';
import { Field , Lista , Mixted } from '../../Tools'
import useFields from '../../Hooks/useFields';
import {SIGN_IN} from '../../../apollo/mutations/usuarios';
import ResponsiveButton from '../../Tools/ResponsiveButton';
 
const LoginForm = ({fields,initialValues,btnName,history})=>{
    const form = useFields(initialValues);

    const [signIn , {loading,error,data} ] = useMutation(SIGN_IN);
    if(loading) console.log('...Loading...')
    if(error) console.log(error)
    if(data){
        const {token} = data.SignIn;
        localStorage.setItem('x-token',token);

        history.push('/')
    }
    return (
        <Fragment>
            <Form onSubmit={(e)=> {
                e.preventDefault(e)
                
                console.log(form.fields)
                    
                signIn({variables:form.fields})
                
                form.setFields(form.values)
            }}>
                {fields.map(field =>{
                    if(field.type === 'lista') return(
                        <Lista 
                            key={field.name} 
                            label={field.label} 
                            placeholder={field.placeholder}
                            options={field.options}
                            {...form.getInput(field.name)}
                        />
                    )
                    if(field.type === 'mixted') return(
                        <Mixted
                            key={field.name}
                            label={field.label}
                            placeholder={field.placeholder}
                            nameSelect={field.nameSelect}
                            options={field.options}
                            defaultValue={field.defaultValue}
                            {...form.getInput(field.name)}
                        />
                    )
                    return <Field key={field.name} label={field.label} placeholder={field.placeholder} {...form.getInput(field.name)} />
                })}
                <ResponsiveButton btnName={btnName} />
            </Form>
        </Fragment>
    )
}

export default LoginForm