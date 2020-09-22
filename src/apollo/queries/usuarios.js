import gql from 'graphql-tag';

const ALL_USUARIOS = gql`
        {
            allUsuarios{
                success
                usuarios{
                    _id
                    nombre
                    role
                    password
                }
            }
        }
`
export {
    ALL_USUARIOS
}
