import {useState} from 'react';

const useFields = (initialValues)=>{
    const values = initialValues;
    const [fields,setFields] = useState({...values});


    const onChange = (e,{value,name})=>{
        setFields({...fields,[name]:value})
    }
    const stdOnChange = (e)=>{
        let name = e.target.name
        let value = e.target.value
        setFields({...fields,[name]:value})
    }
    const onDateChange = (e)=>{
        setFields({...fields,[e.target.name]:e.target.valueAsNumber})
    }
    return {
        fields,
        values,
        setFields,
        getInput : (name)=>({
            name,
            value:fields[name],
            onChange,
        }),
        getDate : (name)=>({
            name,
            value:fields[name],
            onDateChange,
        }),
        getStd : (name)=>({
            name,
            value:fields[name],
            stdOnChange
        })
    }
}

export default useFields;