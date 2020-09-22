import gql from 'graphql-tag';


const SIGN_IN = gql`
        mutation signIn($tipoCedula:String,$cedula:String!,$password:String!){
            SignIn(tipoCedula:$tipoCedula,cedula:$cedula,password:$password){
                success
                status
                token
            }
        }
    `
export {
    SIGN_IN
}