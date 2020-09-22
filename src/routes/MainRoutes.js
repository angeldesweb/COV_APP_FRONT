import React from 'react';
import { Route } from 'react-router-dom';
import { Resultados } from '../container/MainContainers';

const Servicios = ()=>(<h1>Servicios Médicos</h1>)

const Seguridad = ()=>(<h1>Seguridad</h1>)

export default (props)=>{
    const {setShow,show} = props
    return(<div>
        <Route path='/srvmed'  render={(props)=>(<Servicios {...props} match history />)}/>
        <Route path='/seguridad' component={Seguridad} match history />
        <Route exact path='/' render={(props)=><Resultados {...props} setShow={setShow} show={show} />} />
    </div>)
}
