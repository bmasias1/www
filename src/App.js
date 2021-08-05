import React, { Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import { DashboardRoutes } from './routers/DashboarRoutes';

class App extends Component {
  render(){
  return (
    <Router>
      <Switch>
        <DashboardRoutes />
      </Switch>
    </Router>
  );
  }
}

export default App;