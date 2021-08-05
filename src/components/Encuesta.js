import {Card, Container, Row, Col} from 'react-bootstrap'

const getEncuesta = (data) => {
  if (data === undefined) {
    return []
  }
  return JSON.parse(data);
};

const arr = getEncuesta(localStorage.encuestas);

function Encuesta() {
  const newdata = arr.map( ( arr ) => {
    return (
      <>
      <Card key = {arr.id} style={{"backgroundColor": "#EDF2EF"}}>
        <Card.Body>
          <Card.Title>{arr.titulo}</Card.Title>
          <Card.Text>{arr.descripcion}</Card.Text>
          <Card.Link href="#">Ingresar</Card.Link>
        </Card.Body>
      </Card>
      <div>&nbsp;</div>
      </>
    );
  });
  return (
    <Container>
      <div>&nbsp;</div>
      <Row>
        <Col>
          {newdata}
        </Col>
      </Row>
    </Container>
      
  );
}

export default Encuesta;