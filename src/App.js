import React, { Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import { DashboardRoutes } from './routers/DashboarRoutes';
import data from './data/data.json';

class App extends Component {
  async componentDidMount() {
    // localStorage.clear();
    if (window.localStorage.encuestas === undefined) {
      localStorage.setItem("encuestas", JSON.stringify(data));
    }
    // console.log(JSON.parse(localStorage.encuestas));
  }
  render() {
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