import React from 'react';
import ResultadosTable from './ResultadosTable';


const Resultados = (props)=>{
    const {error,data,setShow,show} = props
    if(error) console.log(error)
    if(data){
        const {covids} = data.allCovids;
        return(
            <ResultadosTable setShow={setShow} data={covids} show={show} />
        )
    }
    return <h1>Cargando...</h1>
}

export default Resultados;