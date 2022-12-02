import React, { useEffect, useState } from 'react';
import PageHeader from '@components/PageHeader';
import StopItem from '@components/StopItem';
import useGetStops from '@hooks/useGetStops';
import { envConfig } from '@config';

const Stops = () => {
  /* const stops = [
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
   ];*/
  const stops = useGetStops(envConfig.apiUrl);
  const [filter, setFilter] = useState(false);
  const [filteredStops, setFilteredStops] = useState({});

  useEffect(() => {
    document.title = 'Paradas';
    window.scrollTo(0, 0);
  }, []);

  const stopsByOutward = () => {
    setFilter(!filter);
    setFilteredStops(stops.filter((stop) => stop.wayDirection === 'Ida'));
  };

  const stopsByReturn = () => {
    setFilter(!filter);
    setFilteredStops(stops.filter((stop) => stop.wayDirection === 'Regreso'));
  };

  return (
    <>
      <PageHeader
        title='Paradas'
        isFilter
        isStopPage
        filterByOutward={stopsByOutward}
        filterByReturn={stopsByReturn}
      />

      <main className='hero'>
        <div className='entities__list'>
          {filter ? (
            <>
              {filteredStops.map((stop) => (
                <StopItem
                  key={stop.id}
                  location={stop.name}
                  // distanceInTime={stop.distanceInTime}
                  // distanceInKm={stop.distanceInKm}
                />
              ))}
            </>
          ) : (
            <>
              {stops.map((stop) => (
                <StopItem
                  key={stop.id}
                  location={stop.name}
                  // distanceInTime={stop.distanceInTime}
                  // distanceInKm={stop.distanceInKm}
                />
              ))}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Stops;
