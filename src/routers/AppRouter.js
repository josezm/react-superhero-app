import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
  } from "react-router-dom";
import { LoginScreen } from '../login/LoginScreen';

import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path='/login' component={LoginScreen}/>
          <Route path= '/' component={DashboardRoutes} />
          
        </Switch>
      </div>
    </HashRouter>
    )
}
