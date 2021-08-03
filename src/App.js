import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Formularios from './components/Formularios';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';

class App extends Component {
  render(){
  return (
    <header className= 'AppHeader'>
      <Formularios></Formularios>
    </header>
  );
  }
}

export default App;
