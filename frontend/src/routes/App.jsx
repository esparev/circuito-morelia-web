import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@containers/Login';
import Signup from '@containers/Signup';
import Home from '@containers/Home';
import Admins from '@containers/Admins';
import Admin from '@containers/Admin';
import Drivers from '@containers/Drivers';
import Driver from '@containers/Driver';
import Units from '@containers/Units';
import Unit from '@containers/Unit';
import Stops from '@containers/Stops';
import Profile from '@containers/Profile';

const App = ({ isLogged }) => {
  return (
    <BrowserRouter>
      <Layout isLogged={isLogged}>
        <Switch>
          <Route exact path='/' component={isLogged ? Home : Login} />
          <Route exact path='/admins' component={isLogged ? Admins : Login} />
          <Route exact path='/admins/:slug' component={isLogged ? Admin : Login} />
          <Route exact path='/conductores' component={isLogged ? Drivers : Login} />
          <Route exact path='/conductores/:slug' component={isLogged ? Driver : Login} />
          <Route exact path='/unidades' component={isLogged ? Units : Login} />
          <Route exact path='/unidades/:slug' component={isLogged ? Unit : Login} />
          <Route exact path='/paradas' component={isLogged ? Stops : Login} />
          <Route exact path='/perfil' component={isLogged ? Profile : Login} />
          <Route exact path='/inicia-sesion' component={Login} />
          <Route exact path='/crear-cuenta' component={Signup} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
