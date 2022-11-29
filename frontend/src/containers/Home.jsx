import React, { useEffect } from 'react';
import PageHeader from '@components/PageHeader';
import '@styles/global.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Circuito Morelia';
    window.scrollTo(0, 0);
  }, []);

  return <PageHeader title='Mapa' isHomePage />;
};

export default Home;
