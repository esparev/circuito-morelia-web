import React from 'react';
import PageHeader from '@components/PageHeader';
import StopItem from '@components/StopItem';

const Stops = () => {
  const stops = [
    {
      location: 'Tecnológico de Morelia',
      distanceInTime: 5,
      distanceInKm: 5,
    },
    {
      location: 'Psicología',
      distanceInTime: 12,
      distanceInKm: 5,
    },
    {
      location: 'Lomas de Morelia',
      distanceInTime: 60,
      distanceInKm: 5,
    },
    {
      location: 'Las Américas',
      distanceInTime: 30,
      distanceInKm: 5,
    },
    {
      location: 'Plaza Fiesta Camelinas',
      distanceInTime: 73,
      distanceInKm: 5,
    },
    {
      location: 'Crucero Mil Cumbres',
      distanceInTime: 47,
      distanceInKm: 5,
    },
  ];

  return (
    <>
      <PageHeader title='Paradas' />

      <main className='hero'>
        <div className='entities__list'>
          {stops.map((stop) => (
            <StopItem
              key={stop.location}
              location={stop.location}
              distanceInTime={stop.distanceInTime}
              distanceInKm={stop.distanceInKm}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Stops;
