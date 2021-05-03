import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = () =>(
  <Switch>

    <Route path="/home" exact={true} component={Home}/>
    <Route path="/" exact={true} component={Login} />
  </Switch>


)

export default Routes;
  
