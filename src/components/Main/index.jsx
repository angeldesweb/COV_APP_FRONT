import React , { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import MainRoutes from '../../routes/MainRoutes';
import MainAsideBox from './MainAsideBox/index.jsx';
import ModalForm from './MainTools/ModalForm'

const Main = (props)=>{
    const {history,match} = props
    const [show,setShow] = useState({open:false})
    const handleShow = ()=>{
        setShow({open:!show.open})
    }
    return(
        <div>   
            <MainAsideBox history={history} match={match}/>
            <Grid columns='equal'>
                <Grid.Column></Grid.Column>
                <Grid.Column width='8'>
                    <MainRoutes show={show} setShow={handleShow}/>
                </Grid.Column>
                <Grid.Column></Grid.Column>
            </Grid>
            <ModalForm show={show} setShow={handleShow}/>
        </div>

    )
}

export default Main;