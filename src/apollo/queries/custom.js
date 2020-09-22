import gql from 'graphql-tag';

const RESULT_TABLE = gql`
    {
        allCovids{
            success
            status
            message
            covids{
            _id
            paciente{
                nombre
                apellido
            }
                fechaPrueba
                tipoPrueba
            resultado
            }
        }
    }
`
export {
    RESULT_TABLE
}