import React from 'react'
import { Button, Icon, Table , Checkbox } from 'semantic-ui-react'

const ResultadosTable = (props) =>{ 
  const {data,setShow,show} = props
  console.log(props);
  console.log(show)
    return(<Table compact celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Nombre del Paciente</Table.HeaderCell>
        <Table.HeaderCell>Fecha de la prueba</Table.HeaderCell>
        <Table.HeaderCell>Tipo de prueba</Table.HeaderCell>
        <Table.HeaderCell>Resultado</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {data.map(covid=>(
                <Table.Row key={covid._id}>
                    <Table.Cell>{`${covid.paciente.nombre} ${covid.paciente.apellido}`}</Table.Cell>
                    <Table.Cell>{covid.fechaPrueba}</Table.Cell>
                    <Table.Cell>{covid.tipoPrueba}</Table.Cell>
                    <Table.Cell collapsing>
                        <Checkbox slider checked={covid.resultado} />
                    </Table.Cell>
                </Table.Row>
        ))

        }
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
          <Button
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Agregar Prueba
          </Button>
          <Button size='small' onClick={e=> setShow()}>Nuevo Paciente</Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>)
}

export default ResultadosTable
