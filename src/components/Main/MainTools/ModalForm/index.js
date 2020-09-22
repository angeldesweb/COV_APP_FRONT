import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import FormPacientes from '../FormPacientes/index.jsx'

function ModalExampleModal({show,setShow}) {
  return (
    <Modal
      open={show.open}
    >
      <Modal.Header>Registro de nuevo paciente</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Datos del paciente</Header>
        <FormPacientes/>
        </Modal.Description>
        
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={e => setShow()}>
          Atrás
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal
