import React from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../Formulario.css';

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
  onClick(e) {
    let arrJson = JSON.parse(localStorage.encuestas);
    let newId = parseInt(arrJson.length) + 1;
    let obj = {
      "id": newId,
      "titulo": this.state.nombre,
      "descripcion": this.state.descripcion
    }
    arrJson.push(obj);
    localStorage.setItem("encuestas", JSON.stringify(arrJson));
    alert("La encuesta se ha enviado");
    window.location.href = window.location.href;
  }

  render(){
    return(
          <div className='Fondo'>
            <Form className='Formulario'>
              <h3>Encuesta</h3>
              <FormGroup className= 'TextoFormularios'>
              <Label for="nombre">Nombre</Label>
              <Input type="nombre" name="nombre" id="nombre" value= {this.state.nombre} onChange={this.onChange} className= 'Bloque'/>
              </FormGroup>
              <FormGroup className= 'TextoFormularios'>
              <Label for="descripcion">Descripcion</Label>
              <Input type= "textarea" name= "descripcion" value= {this.state.descripcion} onChange={this.onChange} className= 'BloqueTexto'/>
              </FormGroup>
              <Button className="Boton" onClick= {this.onClick}>Enviar</Button>
            </Form>
          </div>
    );
  }
}
