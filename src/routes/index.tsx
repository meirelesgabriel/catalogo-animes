import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../paginas/dashboard';
import About from '../paginas/about';

const Routes: React.FC = () => (
  <Switch>

    <Route path='/' exact component={Dashboard} />
    <Route path='/about/:mal_id' component={About} />
  </Switch>
);

export default Routes;
