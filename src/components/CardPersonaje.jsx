import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Delete } from './Delete';
import { StatusContext } from '../context/StatusContext';


export const CardPersonaje = () => {
    const {lista, setLista}= useContext(StatusContext);
    const eliminarPj = (id) => {
        const listaSinPersonaje = lista.filter(e => e.id !== id)
        setLista(listaSinPersonaje)
    }
    return (
        <>

            <Row xs={1} md={4} lg={4}>
                {
                    lista.map((element, key) => {

                        return (
                            <Col key={element.id}>

                                <Card style={{ width: '18rem', textAlign:'center', margin:'5px', backgroundColor: 'black', borderColor:'#ffeb00' }}>
                                    <Card.Header style={{backgroundColor:'#ffeb00' }} ><strong>{element.name}</strong></Card.Header>
                                    <Card.Body>
                                        <Card.Img src={"https://starwars-visualguide.com/assets/img/characters/"+(key+1)+".jpg"} style={{width: '250px'}}alt="/" />
                                        <p style={{color: 'white'}} >Nacimiento: {element.birth_year}</p>
                                        <p style={{color: 'white'}} >Genero: {element.gender}</p>
                                        <p style={{color: 'white'}} >Altura: {element.height}</p>
                                        <button className="btn btn-outline-danger" onClick={e => { eliminarPj(element.id) }}>Eliminar</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })

                }
            </Row>
        </>
    )
}
