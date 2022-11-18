import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route path='/' element={isLogged ? <Home /> : <Login />} />
          <Route path='admins' element={isLogged ? <Admins /> : <Login />} />
          <Route path='admins/:slug' element={isLogged ? <Admin /> : <Login />} />
          <Route path='conductores' element={isLogged ? <Drivers /> : <Login />} />
          <Route path='conductores/:slug' element={isLogged ? <Driver /> : <Login />} />
          <Route path='unidades' element={isLogged ? <Units /> : <Login />} />
          <Route path='unidades/:slug' element={isLogged ? <Unit /> : <Login />} />
          <Route path='paradas' element={isLogged ? <Stops /> : <Login />} />
          <Route path='perfil' element={isLogged ? <Profile /> : <Login />} />
          <Route path='inicia-sesion' element={<Login />} />
          <Route path='crear-cuenta' element={<Signup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
