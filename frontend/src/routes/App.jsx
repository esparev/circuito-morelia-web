import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@containers/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
