import React from 'react'
import { useParams } from 'react-router-dom'
import {Card, Container, Row, Col} from 'react-bootstrap'

export const EncuestaScreen = ({ history }) => {

    const { encuestaId } = useParams();

    const getEncuesta = (data) => {
        if (data === undefined) {
          return []
        }
        return JSON.parse(data);
      };
      
    const arr = getEncuesta(localStorage.encuestas);

    const getEncuestaById = ( id ) => {
        return arr.find( encuesta => encuesta.id === id );
    }


    const encuesta = getEncuestaById( parseInt(encuestaId) )

 
    const {
        id,
        titulo,
        descripcion,
    } = encuesta; 

    //para el return
    const handleReturn = () => {

        if( history.lenght <= 2 ){
            history.push('/');
        } else {
            history.goBack();
        }

    }

    return (
        <div className="row mt-5">
            <Container>
                <div>&nbsp;</div>
                <Row>
                    <Col>
                        <Card key = {id} style={{"backgroundColor": "#EDF2EF"}}>
                            <Card.Body>
                            <Card.Title>{titulo}</Card.Title>
                            <Card.Text>{descripcion}</Card.Text>
                            </Card.Body>
                            <button
                                className="btn btn-outline-info"
                                onClick = { handleReturn }>
                                Return
                            </button>
                        </Card>
                        <div>&nbsp;</div>
                    </Col>
                </Row>
            </Container>
            <>
            
            </>

        </div>
    )
}
