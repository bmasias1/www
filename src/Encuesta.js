import './App.css';
import data from './data/data.json';
import {Card, Container, Row, Col} from 'react-bootstrap'

const getEncuesta = (data) => {
  return data;
};

const arr = getEncuesta(data);

function Encuesta() {
  const newdata = arr.map( ( arr ) => {
    return (
      <>
      <Card key = {arr.id} mb = {4}>
        <Card.Body>
          <Card.Title>{arr.titulo}</Card.Title>
          <Card.Text>{arr.descripcion}</Card.Text>
          <Card.Link href="#">Ingresar</Card.Link>
        </Card.Body>
      </Card>
      </>
    );
  });
  return (
    <Container>
      <Row>
        <Col>
          {newdata}
        </Col>
      </Row>
    </Container>
      
  );
}

export default Encuesta;