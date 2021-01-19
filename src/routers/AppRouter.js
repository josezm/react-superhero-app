import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../login/LoginScreen';

import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoutes';
import { PublicRoute } from './PublicRoutes';


export const AppRouter = () => {

  const {user} = useContext(AuthContext);
  

    return (
    <HashRouter>
      <div>
        <Switch>
          <PublicRoute exact path='/login' component={LoginScreen} isAuthenticated = {user.logged} />
          <PrivateRoute path= '/' component={DashboardRoutes} isAuthenticated = {user.logged} />
          
        </Switch>
      </div>
    </HashRouter>
    )
}
