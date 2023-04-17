import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StatusContext } from '../context/StatusContext';


export const CardPersonaje = () => {
    const {lista, setLista}= useContext(StatusContext);

    return (
        <>

            <Row xs={1} md={4} lg={4}>
                {
                    lista.map((element, index) => {
                        return (
                            <Col id={element.name} key={index}>

                                <Card style={{ width: '18rem', textAlign:'center', margin:'5px', backgroundColor: 'black', borderColor:'#ffeb00' }}>
                                    <Card.Header style={{backgroundColor:'#ffeb00' }} ><strong>{element.name}</strong></Card.Header>
                                    <Card.Body>
                                        <Card.Img id={element.id} src={element.img} style={{width: '250px'}}alt="/" />
                                        <p style={{color: 'white'}} >Nacimiento: {element.birth_year}</p>
                                        <p style={{color: 'white'}} >Genero: {element.gender}</p>
                                        <p style={{color: 'white'}} >Altura: {element.height}</p>
                                        <button className="btn btn-outline-danger" onClick={()=>{
                                            const arr = lista.filter(a => a.name != element.name)
                                            console.log(arr)
                                            
                                            setLista(arr)
                                            }}>Eliminar
                                        </button>
        
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
