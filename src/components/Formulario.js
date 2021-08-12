import React from 'react';
import { Form, Card, Container, Row, Col, Button } from 'react-bootstrap'

export default class Formularios extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      descripcion: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e){
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  async onClick(e) {
    // Falta arreglar lo siguiente...
    /*
    const data = {
      Titulo: this.state.nombre,
      Descripcion: this.state.descripcion
    }
    const config = {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await fetch("/prod/encuesta/", config);
    const json = await response.json();
    console.log(JSON.stringify(data));
    console.log(json);
    */
    console.log("ok");
  }

  render(){
    return(
      <Container>
        <div>&nbsp;</div>
        <Row>
          <Col>
            <Card bg={"Light"}>
              <Card.Header>Crear encuesta</Card.Header>
              <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Título</Form.Label>
                      <Form.Control name="nombre" value={this.state.nombre} onChange={this.onChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Descripción</Form.Label>
                      <Form.Control as="textarea" rows={4} name="descripcion" value={this.state.descripcion} onChange={this.onChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="text-center">
                      <Button variant="primary" onClick= {this.onClick}>Enviar</Button>
                    </Form.Group>
                  </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
