import { useMutation } from '@apollo/react-hooks';


const useForm = (mutation,form)=>{
    console.log(form)
    const [mutate,{data}] = useMutation(mutation)
    console.log(mutate)
    const onSubmit = async ()=>{
        await mutate({variables:form.fields})
        console.log(`Petición a realizar ${JSON.stringify(form.fields)}`)
        form.setFields(form.values)
    }
    return [
        data,
        onSubmit,
    ]
}

export default useForm;