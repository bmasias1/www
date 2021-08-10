import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Encuesta() {
  const url = "/prod/encuesta";
  const [listado, setListado] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setListado(responseJSON.body.Items);
  };
  useEffect(() => {
    fetchApi()
  }, []);
  return (
    <Container>
      <div>&nbsp;</div>
      <Row>
        <Col>
          <Row>
          {
            !listado ? "Cargando..." : 
            listado.map ( (listado, index) => {
              return (
                <>
                    <Col xxl={4} xl={6} lg={6} md={12} xs={12}>
                      <Card key={index} bg={"Light"}>
                        <Card.Header>Encuesta #{listado.Id}</Card.Header>
                        <Card.Body>
                          <Card.Title>{listado.Titulo}</Card.Title>
                          <Card.Text>{listado.Descripcion}</Card.Text>
                          <Link to={`./encuestas/${ listado.Id }`}>Ingresar</Link>
                        </Card.Body>
                      </Card>
                      <div>&nbsp;</div>
                    </Col>
                </>
              );
            })
          }
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Encuesta;