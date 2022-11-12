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

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='admins' element={<Admins />} />
          <Route path='admins/:slug' element={<Admin />} />
          <Route path='conductores' element={<Drivers />} />
          <Route path='conductores/:slug' element={<Driver />} />
          <Route path='unidades' element={<Units />} />
          <Route path='unidades/:slug' element={<Unit />} />
          <Route path='paradas' element={<Stops />} />
          <Route path='perfil' element={<Profile />} />
          <Route path='inicia-sesion' element={<Login />} />
          <Route path='crear-cuenta' element={<Signup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
