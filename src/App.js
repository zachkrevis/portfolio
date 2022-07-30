import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/home/';
import Error404 from './pages/404/';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/404' component={Error404} />
          <Redirect to='/404' />
        </Switch>
    </Router>
  );
}

export default App;
