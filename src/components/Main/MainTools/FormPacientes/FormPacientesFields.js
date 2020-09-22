const fields = [

    {
        name:'cedula',
        label:'Cédula',
        placeholder:'Cédula del usuario',
        nameSelect:'tipoCedula',
        options:[
            {
                key:1,
                text:'V',
                value:'V'
            },
            {
                key:2,
                text:'E',
                value:'E'
            }
        ],
        defaultValue:'V',
        type:'mixted',
    },
    {
        name:'nombre',
        label:'Nombres',
        placeholder:'Nombres del paciente',
        type:'text'
    },
    {
        name:'apellido',
        label:'Apellidos',
        placeholder:'Apellidos del paciente',
        type:'text'
    },
    {
        name:'sexo',
        label:'Género',
        placeholder:'',
        options:[
            {
                key:1,
                text:'M',
                value:true
            },
            {
                key:2,
                text:'F',
                value:false
            }
        ],
        type:'lista'
    },
    {
        name:'edad',
        label:'Edad',
        placeholder:'Edad del paciente',
        type:'Number'
    },
    {
        name:'fechaNac',
        label:'Fecha Nacimiento',
        type:'Date'
    },
    {
        name:'resultado',
        label:'Resultado',
        placeholder:'',
        options:[
            {
                key:1,
                text:'Positivo',
                value:true
            },
            {
                key:2,
                text:'Negativo',
                value:false
            }
        ],
        type:'lista'
    },

    
]

const initialValues = {
    password:'',
    tipoCedula:'V',
    cedula:'',
    nombre:'',
    apellido:'',
    sexo:true,
    edad:18,
    fechaNac:0,
    resultado:false

}

export {
    fields,
    initialValues
}