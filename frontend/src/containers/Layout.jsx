import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

const Layout = ({ children, isLogged }) => {
  return (
    <div className='App'>
      <Header isLogged={isLogged} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
