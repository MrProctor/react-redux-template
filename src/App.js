import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home.jsx';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/'} component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
