import {Card, Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
          <Link
            activeClassName="active"
            className="nav-item nav-link" 
            to={`./encuestas/${ arr.id }`} >
            Ingresar...     
          </Link>
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