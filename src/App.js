import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Formularios from './components/Formularios';
import Encuesta from './Encuesta';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Formularios} />
        <Route path='/Encuesta' component={Encuesta} />
      </Switch>
    </Router>
  );
  }
}

export default App;