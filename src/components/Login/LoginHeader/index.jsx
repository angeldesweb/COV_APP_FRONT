import React from 'react';
import { Header , Segment , Image } from 'semantic-ui-react';

const LoginHeader = ()=>{
    return(
        <Segment raised>
            <Image src='./images/Logo.png' size='small'/>
            <Header as='h1'>Sistema de verificación de pruebas</Header>
        </Segment>
    )
}

export default LoginHeader;