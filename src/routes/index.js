import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Ping from '../pages/Ping';
import Traceroute from '../pages/Traceroute';
import Bgproute from '../pages/Bgproute';



const Routes = () =>(
  <Switch>
    <Route path="/" isPrivate={false} exact  component={Login} />
    <Route path="/home" isPrivate={false} exact component={Home}/>
    <Route path="/ping" exact isPrivate={false} component={Ping} />
    <Route path="/traceroute" exact isPrivate={false} component={Traceroute} />
    <Route path="/bgproute" exact isPrivate={false} component={Bgproute} />

  </Switch>


)

export default Routes;
  
