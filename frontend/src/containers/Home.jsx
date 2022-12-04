import React, { useEffect } from 'react';
import PageHeader from '@components/PageHeader';
import '@styles/global.css';
import '@styles/Home.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Circuito Morelia';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader title='Mapa' isHomePage isFilter />

      <div className='map__container'>
        <iframe
          title='map'
          width='100%'
          height='100%'
          style={{ filter: `grayscale(1) contrast(1.2) opacity(0.7)` }}
          frameborder='0'
          scrolling='no'
          marginheight='0'
          marginwidth='0'
          src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=morelia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
      </div>
    </>
  );
};

export default Home;
