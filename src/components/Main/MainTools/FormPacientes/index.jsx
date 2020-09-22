import React, { Fragment } from 'react'
import { useMutation } from '@apollo/react-hooks';
import { CREATE_PACIENTE } from '../../../../apollo/mutations/pacientes'
import { Form } from 'semantic-ui-react';
import { Field , Lista , Mixted , Date , NumberInput } from '../../../Tools'
import useFields from '../../../Hooks/useFields';
import ResponsiveButton from '../../../Tools/ResponsiveButton';
import {fields,initialValues} from './FormPacientesFields';
 
const FormPacientes = ({history})=>{
    const btnName = 'Registrar'
    const form = useFields(initialValues);

    const [createPaciente , {loading,error,data} ] = useMutation(CREATE_PACIENTE);
    if(loading) console.log('...Loading...')
    if(error) console.log(error)
    if(data) console.log(data)
    return (
        <Fragment>
            <Form onSubmit={(e)=> {
                e.preventDefault(e)
                
                console.log(form.fields)
                    
                createPaciente({variables:form.fields})
                
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
                    if(field.type === 'Date') return(
                        <Date key={field.name} label={field.label} {...form.getDate(field.name)} />
                    )
                    if(field.type === 'Number') return(
                        <NumberInput key={field.name} label={field.label} placeholder={field.placeholder} type={field.type} {...form.getStd(field.name)}/>
                    )
                    return <Field key={field.name} label={field.label} placeholder={field.placeholder} type={field.type} {...form.getInput(field.name)} />
                })}
                <ResponsiveButton btnName={btnName} />
            </Form>
        </Fragment>
    )
}

export default FormPacientes