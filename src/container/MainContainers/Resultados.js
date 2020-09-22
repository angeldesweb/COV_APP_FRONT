import React from 'react';
import { useQuery } from 'react-apollo';
import { RESULT_TABLE } from '../../apollo/queries/custom.js';
import LoadingDimmer from '../../components/Tools/LoadingDimer';
import Resultados from '../../components/MainRoutes/Resultados/index.jsx';


const ResultadosContainer = (props)=>{
    const {loading,error,data} = useQuery(RESULT_TABLE);
    const {show,setShow} = props;
    if(loading){
        return(
            <LoadingDimmer component={<Resultados error={error} data={data}/>}/>
        )
    }
    if(error) console.log(error);
    if(data) console.log(data)
    return(
        <Resultados error={error} data={data} setShow={setShow} show={show} />
    )
}

export default ResultadosContainer;