import React , {useState} from 'react';
import { Menu , Image } from 'semantic-ui-react';

const MainAsideBox = (props)=>{
    const {history} = props
    const [active,setActive] = useState({name:history.location.pathname.split('/')[1] || 'Inicio' })
    const handleActive = (event,{name})=>{
        name === 'Inicio' ? history.push(`/`) : history.push(`/${name}`)
        setActive({name:name})
    }
    console.log(active.name)
    return(
        <Menu pointing secondary vertical fixed='left'>
            <Menu.Item>
                <Image src='/images/logo.png' size="small"/>
            </Menu.Item>
            <Menu.Item name={'Inicio'} active={active.name === 'Inicio'} onClick={handleActive}>
                Resultados
            </Menu.Item>
            <Menu.Item name={'srvmed'} active={active.name === 'srvmed'} onClick={handleActive}>
                Servicios Médicos
            </Menu.Item>
            <Menu.Item name={'seguridad'} active={active.name === 'seguridad'} onClick={handleActive}>
                Seguridad
            </Menu.Item>
            <Menu.Item position='right' onClick={e =>{localStorage.clear(); history.push('/login')}}>
                Finalizar sesión
            </Menu.Item>
        </Menu>
    )
}

export default MainAsideBox;