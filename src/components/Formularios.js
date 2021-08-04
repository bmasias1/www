import React from 'react';
import {Button, Row ,Col,  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from 'reactstrap';
import './Formularios.css';

export default class Formularios extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      identificacion: '',
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
  onClick(e){
    console.log(this.state);
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
        <Label for="identificacion">Identificacion</Label>
        <Input type="identificacion" name="identificacion" id="identificacion" value= {this.state.identificacion} onChange={this.onChange}  className= 'Bloque'/>
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
