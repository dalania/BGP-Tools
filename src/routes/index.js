import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route'
import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = () =>(
  <Switch>

    <Route path="/home" isPrivate exact component={Home}/>
    <Route path="/" exact  component={Login} />
  </Switch>


)

export default Routes;
  
