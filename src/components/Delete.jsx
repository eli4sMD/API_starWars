
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { StatusContext } from '../context/StatusContext';


export const Delete = ({id}) => {

    const {lista, setLista} = useContext(StatusContext);

    const eliminar = ()=>{
        const nuevoArray= lista.filter(item => item.id != id);
        setLista(nuevoArray); 
    }

   
  return (
    <>

        <Button  variant="outline-danger" type='button' onClick={eliminar} >Eliminar</Button>
    
    </>
  )
}
