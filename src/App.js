import React, { Component} from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import { DashboardRoutes } from './routers/DashboarRoutes';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <DashboardRoutes></DashboardRoutes>
        </Switch>
      </Router>
    );
  }
}

export default App;
