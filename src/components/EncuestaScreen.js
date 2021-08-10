import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function EncuestaScreen () {
    const { encuestaId } = useParams();
    const url = "/prod/encuesta/" + encuestaId;
    const [encuesta, setEncuesta] = useState();
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setEncuesta(responseJSON.Item);
    };
    useEffect(() => {
        fetchApi()
    });
    const history = useHistory();
    return (
        <Container>
            <div>&nbsp;</div>
            {
                !encuesta ? "Cargando..." :
                <Row>
                    <Col>
                      <Card key={encuesta.Id} bg={"Light"}>
                        <Card.Header>Encuesta #{encuesta.Id}</Card.Header>
                        <Card.Body>
                          <Card.Title>{encuesta.Titulo}</Card.Title>
                          <Card.Text>{encuesta.Descripcion}</Card.Text>
                          <Link onClick={() => history.goBack()}>Volver</Link>
                        </Card.Body>
                      </Card>
                      <div>&nbsp;</div>
                    </Col>
                </Row>
            }
        </Container>
    );
}

export default EncuestaScreen;